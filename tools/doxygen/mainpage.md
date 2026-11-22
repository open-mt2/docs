# OpenMT2 Client Documentation {#mainpage}

The client game layer: the executable, the game modules, the Python bindings and
the seams that connect them to the engine.

This site is generated from `client/include` and `client/src` with Doxygen.

## Start here

- [Class list](annotated.htm) -- every documented type
- [Namespace list](namespaces.htm) -- the module namespaces
- [File list](files.htm) -- headers and translation units

## Modules

| Module | Namespace | Responsibility |
|---|---|---|
| Application | `OMT2Client::Application` | boot, command line, game session, pack loading |
| Protocol | `OMT2Client::Protocol` | wire decoding and packet sizes |
| Script | `OMT2Client::Script` | pack manifest, host selection, script lifecycle |
| Python host | `OMT2Client::Python::Host` | Python adapter at the script seam |
| Game | `Game` | actors, races, motion and game-side data |
| Map | `Map` | terrain, outdoor maps and collision |
| UI | -- | windows, widgets and rendering |
| Session | -- | connection and phase handling |

`Game`, `Map`, `Session` and `UI` still use their legacy names or the global
namespace; the client repository tracks the cleanup.

## Conventions

- Names follow the Google C++ Style Guide for new and cleaned-up code.
- API documentation uses Doxygen contracts (`@brief`, `@param`, `@return`).
- The engine is documented separately; this site covers only the client.
