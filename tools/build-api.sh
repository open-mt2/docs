#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
doxygen_dir="$root/tools/doxygen"
output_dir="${OUTPUT_DIR:-$root/build/client/api}"
doxygen_bin="${DOXYGEN_BIN:-doxygen}"

if [[ ! -f "$root/build/index.html" ]]; then
  echo "error: build/ is missing; run npm run build first" >&2
  exit 1
fi

if [[ -z "${CLIENT_DIR:-}" ]]; then
  if [[ -d "$root/../client/include" && -d "$root/../client/src" ]]; then
    client_dir="$(cd "$root/../client" && pwd)"
  elif [[ -d "$root/client/include" && -d "$root/client/src" ]]; then
    client_dir="$(cd "$root/client" && pwd)"
  else
    echo "error: client repo not found; set CLIENT_DIR to the client checkout" >&2
    exit 1
  fi
else
  client_dir="$(cd "$CLIENT_DIR" && pwd)"
fi

if [[ ! -d "$client_dir/include" || ! -d "$client_dir/src" ]]; then
  echo "error: $client_dir does not look like the client repo (include/ and src/ missing)" >&2
  exit 1
fi

if ! command -v "$doxygen_bin" >/dev/null 2>&1 && [[ ! -x "$doxygen_bin" ]]; then
  echo "error: doxygen not found; install it or set DOXYGEN_BIN" >&2
  exit 1
fi

config="$(mktemp "${TMPDIR:-/tmp}/openmt2-doxygen.XXXXXX")"
trap 'rm -f "$config"' EXIT

escape_sed() {
  printf '%s' "$1" | sed 's/[&|]/\\&/g'
}

sed \
  -e "s|@CLIENT_DIR@|$(escape_sed "$client_dir")|g" \
  -e "s|@DOXYGEN_DIR@|$(escape_sed "$doxygen_dir")|g" \
  -e "s|@OUTPUT_DIR@|$(escape_sed "$output_dir")|g" \
  "$doxygen_dir/Doxyfile.in" > "$config"

rm -rf "$output_dir"
mkdir -p "$output_dir"
"$doxygen_bin" "$config"

if [[ -d "$output_dir/html" ]]; then
  for entry in "$output_dir"/html/* "$output_dir"/html/.[!.]*; do
    [[ -e "$entry" ]] || continue
    mv "$entry" "$output_dir"/
  done
  rmdir "$output_dir/html"
fi

if [[ ! -f "$output_dir/index.htm" ]]; then
  echo "error: Doxygen produced no index.htm in $output_dir" >&2
  exit 1
fi

cp "$output_dir/index.htm" "$output_dir/index.html"
echo "C++ API written to $output_dir/index.html"
