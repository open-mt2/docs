---
title: Architecture
sidebar_position: 2
---

# Architecture

## Role

The game, in the sense the engine is not: Metin2 data formats and the
application that turns content into a running client.

| Directory | Responsibility |
|---|---|
| `src/application` | bootstrap, command line, game session, pack loading, platform and Python runtimes |
| `src/game` | item/race/skill tables, network packet structs, game-side data managers |
| `src/ui` | the Python game modules, scene setup and the UI layer |
| `src/utils` | shared Python helper utilities |
| `src/webbrowser` | no-op stub keeping the UI's web-page entry points linkable |

Include roots: `<Client/Application/...>`, `<Client/Game/...>`,
`<Client/UI/...>`, `<Client/Utils/...>`, `<Client/WebBrowser/...>`. Engine
headers are `<Neoeter/...>`; the Python bridge is `<Neoeter/Python/...>`.

## Dependency boundaries

```
client ──► neoeter-python ──► neoeter
   └──────────────────────────►
```

- the client may include engine and bridge headers through their public names;
- everything game-side is here; the engine and the bridge never include a
  client header. A change that needs that direction belongs in `neoeter` as a
  generic service.

## Module registration

`src/ui` owns the game modules. Each is a flat C function table
(`Py_InitModule("player", …)`, `"item"`, `"skill"`, `"chrmgr"`, `"quest"`, …),
registered after `neoeter-python` has created the interpreter. This is the seam
where a future C# host can take over one module at a time
([script hosts](/neoeter/scripting-hosts)).

## Assets

Not in this repository. `bin/` lives in the devkit (asset fetcher) and is
mounted/copied at dist assembly time. Code and content have different
provenance and licenses; keeping them apart is deliberate.

## Executable

The root project defines the `openmt2` target from `src/Main.cpp`; the target is
declared in `src/ui/CMakeLists.txt` and links `Client::Application`. The binary
is written to `build/openmt2`, which is what the devkit build scripts and the
dist assembly use.
