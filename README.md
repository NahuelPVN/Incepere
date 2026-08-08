# Incepere

Roadmap tracker for self-taught people. No deadline, no exam. Tells you what to work on today from your skill tree, based on the time you actually have.

Status: early dev — stage 2/7 (backend setup in progress).

## Problem

Study planners (StudyNext, Shovel, etc.) solve "what do I study before my exam", they work backward from a deadline. Roadmap tools (roadmap.sh) solve planning a skill tree, but not what to do in a given session. Neither fits someone learning open-ended, no deadline, just a daily time block and no idea where to start that day.

## How it will work

- Roadmap is a tree, not a flat list (topics depend on other topics).
- Each topic breaks down into specific tasks.
- Daily view picks the next task based on progress + time available. No deadline math, just "what's next in the tree that fits today."
- Falling behind schedule shifts the rest of the plan (+15min rule, no fancy algorithm).
- Pomodoro timer wired to the active task.

## Stack

Frontend: Vanilla HTML/CSS/JS. Backend: Node.js + Express. Database: PostgreSQL.

## Build stages

- [x] 0. Backend setup (Express serving frontend)
- [x] 1. Tree data structure, no rendering
- [x] 2. Move data to PostgreSQL, serve via API
- [ ] 3. User authentication + per-user roadmaps
- [ ] 4. Topics vs specific tasks
- [ ] 5. Dynamic time adjustment
- [ ] 6. Pomodoro
- [ ] 7. LLM-based time estimation on load

## Why

Learning project. Code quality reflects the stage.

## License

MIT
