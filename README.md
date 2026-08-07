# Incepere

Roadmap tracker for self-taught people. No deadline, no exam. Tells you what to work on today from your skill tree, based on the time you actually have.

Status: early dev — stage 0/6.

## Problem

Study planners (StudyNext, Shovel, etc.) solve "what do I study before my exam", they work backward from a deadline. Roadmap tools (roadmap.sh) solve planning a skill tree, but not what to do in a given session. Neither fits someone learning open-ended, no deadline, just a daily time block and no idea where to start that day.

## How it will work

- Roadmap is a tree, not a flat list (topics depend on other topics).
- Each topic breaks down into specific tasks.
- Daily view picks the next task based on progress + time available. No deadline math, just "what's next in the tree that fits today."
- Falling behind schedule shifts the rest of the plan (+15min rule, no fancy algorithm).
- Pomodoro timer wired to the active task.

## Stack

Vanilla HTML/CSS/JS. No framework, no backend yet.

## Build stages

- [ ] 1. Tree data structure, no rendering
- [ ] 2. Persistence
- [ ] 3. Topics vs specific tasks (two levels)
- [ ] 4. Dynamic time adjustment
- [ ] 5. Pomodoro
- [ ] 6. LLM-based time estimation on load

## Why

Learning project. Code quality reflects the stage.

## License

MIT
