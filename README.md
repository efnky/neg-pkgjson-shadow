# neg-pkgjson-shadow

A polyglot repo whose **real** backends are Python and Go, but which carries a
**frontend `package.json` at the root**. The objective is that the deployer
**misdetects the whole project as Node**, because root-level `package.json` is
usually the first/strongest language signal — it *shadows* the backends.

## Layout
```
package.json            <- ROOT frontend manifest (Node)  ← shadows detection
index.js                <- frontend entrypoint
service-python/         <- real Python backend
  main.py
  requirements.txt
service-go/             <- real Go backend
  main.go
  go.mod
```

## Test objective
- Expected (wrong) detection: **Node**, driven by the root `package.json`.
- Actual intended services: Python (`service-python/`) and Go (`service-go/`).
- The deploy should pick the **Node** path and ignore the Python/Go backends —
  demonstrating manifest shadowing when a frontend manifest sits at the root.

## Notes
- Move `package.json` into a `frontend/` subfolder (instead of the root) and a
  correct detector should stop shadowing and see the polyglot layout.
