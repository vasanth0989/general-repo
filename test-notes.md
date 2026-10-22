# Everything Cameron showed and said about the context repos

Consolidated 2026-10-21 from the KT session of 2026-10-05 and the follow-up on 2026-10-06.

## 1. What Cameron said, in his words

- The problem: "where is the best place to store all of the planning artifacts and any context that we have for our team or list of repos" when doing spec-driven development with AI.
- The solution he used before: "Sirisha, Alex and I were on a pod for Clearwater ... we used this for a pilot program ... and it worked pretty well".
- The framework: "we used an existing framework called Pod Context Kit which creates this. It gives you overall structure for how to document your context repo and it gives you a skill for morning plan which is for standups".
- Two kinds of content: "One is our daily objectives and progress as we progress through our development. And two is ... the C1BMAD and BMAD in general generates a lot of planning artifacts, architecture docs and stories and epics ... you need to store those in a repo somewhere".
- Why not in the code repos: "each pod is going to have numerous repos for code ... some will be existing repos that other teams might own. So instead of having these documents duplicated across all of the repos ... it's best to just have it in one and then point to the other repos".
- The norm: "We've seen this across different pods where establishing a context repo is the norm, to have a standard starting place".
- Structure: "each pod having their own context repo ... team-pod-name context repo. And then ... put a pointer in a readme file to point to the other two just so Claude has a way to point to it". "Here's the Team Erie and Team Chesapeake links as well".
- How to create one: "we just create this repo in sandbox, install those frameworks and we're kind of good from there to use the morning plan skill as well as C1BMAD". He promised "specific links for C1BMAD and for the Pod Context Kit framework to get this installed". Not yet shared on the shelf.
- What else goes in: "any sort of documentation that you have that is fit to provide to AI, keeping the AI do's and don'ts in mind, especially with vendor provided documentation".
- GitHub Pages: "there is a GitHub Pages integration that gets set up, that builds out a nice UI ... with the front end information about project status. I haven't turned it on yet for this repo".
- C1BMAD: "C1BMAD is just our customizations on top of the open source BMAD framework ... a framework for organizing how we do development in spec-driven development using AI tooling. Rather than continually prompting 'go develop this function', it codifies all of the requirements from the product side, from the architecture side and then plans epics and stories ... and gives us great confidence to then give those specs to the AI tools".
- The guide to read: the Confluence page "Getting Started with c1-bmad" that Kaushik had shared that morning: "this getting started is a great guide".
- The morning plan: it "interrogates GitHub and Jira across the known repos, produces per-person primary and secondary objectives and success metrics for the day, and raises impediments"; run daily; conversational, you can tell it which ticket is impeded; feed it by Jira comments or by flagging the issue as impeded. He had run it that morning; it noticed Rahul was on vacation.
- Jira MCP capabilities: get, search (JQL), comment, create, update, assign, transition. Longer term the BMAD epics and stories are synced to Jira through it.
- Pod 2 example of building the repo registry: he gave Claude the Confluence capability list and asked it to find the related repos and document the saga stages each publishes; it built the inventory, so the morning plan knows where to look for open PRs.
- PRDs and architecture stay in Confluence; C1BMAD can pull from there; per-capability PRDs preferred. How to run it for a capability: give C1BMAD the capability's PRD page as product context and the ADR-0003 page with its children as architecture context, then ask for epics and stories; to be validated.
- Closing agreement: "I think we should each create our own context repo and then just link to each other's in the readme".

## 2. team-lawrence-context (Pod 2), as on screen

`github.com/cof-sandbox/team-lawrence-context`, GitHub Enterprise, private, "Internal". About: "Team Lawrence pod – planning + dashboard for PayX Capabilities". 2 branches, 6 commits. Contributors Cameron Mayor (LDQ323_cof) and Rahul Patel (ZZP373_cof). Languages Python 74.7%, HTML 15.1%, JavaScript 3.7%, CSS 3.1%, Astro 2.7%, Groovy 0.5%, Shell 0.2%.

### Commit history, oldest first

```
6c05b48 Set up c1-bmad: skills, rules, standards, and templates (3 days before 2026-10-05)
4c84ea3 Install pod-context-kit dashboard scaffold for Team Lawrence
 Numerous updates (1 hour before)
 morning plan skill to check Jira as well (31 minutes before)
 Merge pull request #2
```
That is the creation order: C1BMAD first, Pod Context Kit second, then content and the morning-plan tweak.

### Top level

```
.claude/ Claude Code project folder: rules, skills, the /bmad-* commands
_bmad/ the installed C1BMAD modules
content/
 objectives/ objectives-2026-10-02.md, objectives-2026-10-05.md
 planning/ related-repos.md
 decisions/ ADRs (named in CLAUDE.md, not yet present)
 sessions/ meeting notes (named in CLAUDE.md)
 archive/ superseded docs (named in CLAUDE.md)
security/
site/ dashboard source (Astro), built to docs/
templates/
.bmad-version pins the C1BMAD version
.gitignore
.npmrc the installer is npm-based
CLAUDE.md agent instructions with a per-directory trust table
index.md the "OKF knowledge bundle" entry point for agents and humans
log.md running findings log (for example OFAC vs OFAC.PAUSE)
```

`_bmad/` contents:
```
_config bm-data-std bm-dp bm-dpapi bm-proj bm-shared bmm cis core custom
invincible jarvis render scripts tea
.c1-bmad-installer-stamp config.toml config.user.toml
```

### CLAUDE.md trust table

```
| Directory | Trust Level | Purpose |
|------------------------|---------------|------------------------------------------------------|
| Root (`*.md`) | Canonical | Deliverables plan, tasks |
| `content/objectives/` | Canonical | Daily objectives files |
| `content/planning/` | Active | Capabilities, roadmap, metrics -- feeds into canonical plan |
| `content/decisions/` | Authoritative | ADRs that shaped the architecture |
| `content/sessions/` | Reference | Meeting notes and session logs |
```
Also in CLAUDE.md: the agent's responsibilities ("Editing/creating planning documents and decision records", "Maintaining the deliverables plan and task breakdowns", "Writing daily objectives files (`content/objectives/objectives-YYYY-MM-DD.md`)", "Updating `tasks.md` with implementation task status", "Building and deploying the dashboard site") and placement rules ("Daily objectives go in `content/objectives/`", "Planning docs go in `content/planning/`", "Decision records go in `content/decisions/` with archive headers if superseded", "Superseded docs get moved to `content/archive/` with a status banner pointing to what replaced them").

### README.md as Claude wrote it

```
# team-lawrence-context

Planning and design context for the **Team Lawrence** pod. This repo
contains no application code -- it's the strategic planning layer:
deliverables, task breakdowns, decision records, and the dashboard that
visualizes pod activity.

Published as an
[OKF](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)
knowledge bundle -- see [index.md](index.md) for the agent/human entry point
```
Cameron corrected the first draft with the prompt `this is not for the "LAWRENCE" platform.` because Claude had read "LAWRENCE platform" from CLAUDE.md; Lawrence is the team name, not a platform.

### The daily objectives file

`content/objectives/objectives-2026-10-05.md`, 217 lines. Front matter:
```
type: Objectives
title: Objectives for 2026-10-05
description: Sprint 26.4.1 work split by owner -- OFAC saga confirmation, new wire saga types, and PayX onboarding.
tags: objectives, planning, daily
timestamp: 2026-10-05 09:00:00 UTC
```
Body: `# Objectives for 2026-10-05`, `## Overview` (one paragraph of the sprint split by person), `## Primary Objectives` with numbered entries each having **What**, **Why**, **Actions** as checkboxes, **Status** (for example "⌛ NOT STARTED"), then `## Owner Summary` (table: Owner, Primary Tasks, Secondary Tasks, with EIDs), `## Success Metrics for Today` (checkboxes), `## Context References` (table: Resource, Location, Purpose: the sprint board "Jira: Lawrence | 26.4.1 (10/1-10/14)", the related-repos registry, log.md).

### The related-repos registry

`content/planning/related-repos.md`, 39 lines. Front matter `type: Registry`, `title: Related Repositories`, `tags: planning, repos, registry`. Intro: "This is the registry of implementation repositories coordinated by this planning context. `team-lawrence-context` holds no application code itself -- this doc is where that work is tracked once it exists. Each entry should map back to a deliverable in the deliverables plan."

Table columns: Repo, Purpose, Owner, Status, Saga Stage, Maps to. Six PayX repos: `PaymentExchange-client-registry-ms-gen3` (kingsguard, `.CLIENTREGISTRY`), `PaymentExchange-bad-bank-account-backend-fg` (paymentjedis, `BADBANK`), `PaymentExchange-payx-bank-availability-gen3` (foryourapisonly, `BANKVALIDATION`), `PaymentExchange-bad-bank-account-fg` (paymentjedis, none), `PaymentExchange-payx-account-qualification-fg` (foryourapisonly, `ACCOUNTQUALIFICATION`), `PaymentExchange-payx-ofac-screening` (masterofcoin, `OFAC`); all "Maps to: TBD".

### Claude Code session

Environment: iTerm2 on a Mac, Claude Code opened inside the repo on branch `feature/1005`; status line `team-lawrence-context | feature/1005 | Context-used: 6% (60k) | Context-left: 94% (940k)`; model `claude-5-sonnet[1m]`; "auto mode on (shift+tab to cycle)".

The morning plan output, headed `Morning Briefing — 2026-10-05`, had sections Project Pulse, Yesterday's progress (from objectives-2026-10-02.md), Work in progress right now (uncommitted), Recent commits, and a note "No OpenSpec directories found; no other repos tracked yet in data-sources.json besides this context repo itself". It then asked "What should today's main focus be?" with options. The morning plan is a skill from the Pod Context Kit; its exact invocation was not shown.

Prompts Cameron typed, exactly:
```
please use the jira mcp and check on the "Lawrence | 26.4.1 (10/1-10/14)" sprint to find current stories for this sprint.
this is not for the "LAWRENCE" platform.
/mcp
/bmad-pr (autocomplete shown)
/bmad-par (autocomplete shown)
```
Jira answer: 13 stories in the sprint, 2 in Refinement (ENTPMTS-143525, ENTPMTS-143524), 11 in Backlog.

`/mcp` showed 18 Enterprise MCPs: amplitude (failed), asset360 (14 tools), bigquery (failed), coms (failed), counslr (21), customer-core (1), datadog (failed), devnavhub (6), exchange (11), figma (failed), forecast (5), github (42), incident-response (1), jira (21), model-monitoring (1), onestream-accelerator (7), partner-portal (failed), slack (9). The Jira server's 21 tools include `get_custom_fields_tool`.

The `/bmad-*` project commands installed by C1BMAD, with their one-line descriptions:
```
/bmad-help Analyzes current state and user query to answer BMad questions or recommend the next skill(s)
/bmad-product-brief Create, update, or validate a product brief
/bmad-prfaq Amazon Working Backwards: press release first, then hard Q&A, ending in a PRFAQ
/bmad-prd Create, update, or validate a PRD
/bmad-spec Condense any input (idea, brief, PRD, transcript, notes) into SPEC.md plus supporting files
/bmad-architecture Work out and record the architecture decisions in a short architecture document
/bmad-create-epics-and-stories Break requirements into epics and user stories
/bmad-sprint-planning Check planning is complete enough to implement, then generate the sprint status file from the epics
/bmad-correct-course Assess the impact of a significant change mid-sprint across PRD, epics, architecture, UX; sprint change proposal
/bmad-code-review Review code changes with several independent reviewers in parallel, then triage
/bmad-project-context Set up, adopt, refresh, or audit a repository's agent instructions (the AGENTS.md block); records agent pitfalls
/bmad-party-mode Group discussion between installed BMAD agents or custom personas
/bmad-advanced-elicitation Push the LLM to reconsider and improve its recent output (socratic, first principles, pre-mortem, red team)
/bmad-agent-pm John, product manager
/bmad-agent-architect Winston, system architect
/bmad-agent-dev Amelia, senior software engineer who implements stories
```

## 3. clearwater-context (the pilot), as on screen

`github.com/cof-sandbox/clearwater-context`, private, "Internal". About: "Clearwater pod — planning + dashboard for the Wire Modernization pilot (inbound SWIFT). PayX-native wire modernization." 4 branches, 176 commits, 5 contributors, Issues 18, Pull requests 1, 74 github-pages deployments; latest commit "adding daily objectives" 3 weeks before 2026-10-05; first commit "Initialize Clearwater context repo (inbound SWIFT pilot)" 3 months before.

Top level:
```
.claude/ .obsidian/ .vscode/ _bmad-output/ _bmad/ adrs/ content/ daily/ docs/
governance/ prds/ security/ site/ templates/ .bmad-version .gitignore .npmrc
```
Commit subjects seen: "updates from BMAD PRD generation", "add updates after impl readiness", "story 1.1 updates", "feat(governance): function-driven per-capability gate model", "docs(governance): governance-agent productization deck", "chore(dashboard): rebuild docs/ with Backlog gate review", "Update planning content 2026-07-30".

`_bmad-output/`:
```
implementation-artifacts/
party-mode/
planning-artifacts/
 architecture/architecture-clearwater-inbound-swift-2026-08-06/
 reviews/ .memlog.md ARCHITECTURE-SPINE.md DESIGN-REVIEW.md PER-STAGE-SAGA-ONBOARDING-CHECKLIST...
 prds/prd-clearwater-inbound-swift-2026-08-10/
 .memlog.md addendum.md prd.md reconcile-old-prd.md
 review-adversarial-general.md review-altitude.md review-rubric.md
 epics.md
 implementation-readiness-report-2026-08-26.md (and 09-03, 09-08)
 sprint-change-proposal-2026-08-26.md (and 09-03, 09-08)
specs/spec-clearwater-inbound-swift/
```

What the three main artifacts look like:

- `prd.md` (573 lines, 65.9 KB): requirements stated as capabilities with "Consequences (testable)"; mechanisms live in `addendum.md`; priority tags [MVP] / [Should] / [Could]; feature groups 4.1 to 4.8; requirements keyed FR-1, FR-2 and tied to user journeys ("Realizes UJ-1").
- `ARCHITECTURE-SPINE.md` (431 lines): front matter `status: final`, `created: 2026-08-06`, `updated: 2026-09-08`, `binds: FR-1..FR-22, SM-1..SM-7, D1-D9`, `sources: ... prd.md (AUTHORITATIVE)`; a dated status paragraph; decisions numbered AD-1 to AD-26 tagged [ADOPTED] or [PROPOSED].
- `epics.md` (1,415 lines, 108 KB): front matter `stepsCompleted: step-01-validate-prerequisites, step-02-design-epics, step-03-create-stories` and `inputDocuments: prd.md, architecture spine`; an Overview with the thesis (parity SM-1, exactly-once SM-2, no-regression SM-3, accounting correctness SM-4, confirmation compliance SM-5); then "Open Items & Gated Stories (Risk Register)": stories "buildable-to-contract but not acceptance-closeable until their owner responds", table Story, Gated on, Owner.

## 4. The spec stack slide Cameron showed

Deck "Spec-Driven Development Pods Kickoff", slide 6 "The Spec Stack: Five Artifacts. One Source of Truth." Each spec unlocks the next; nothing moves until the previous artifact is approved; AI helps write every spec, a named human signs off.

| Artifact | What it answers | Who owns | Gate |
|---|---|---|---|
| Product Strategy Docs (optional) | What problem are we solving and for whom? | Product | PM sign-off |
| PRD (required) | Why and what: user outcomes, constraints, success metrics; co-authored by Product, Biz, Eng | Product leads | PM + Biz + Eng |
| UX Spec (if UI changes) | How should users experience it? | Design leads | Designer + PM |
| Architecture Doc (required) | How do we build it? Tech stack, data models, API contracts, security; every decision traces to the PRD | Engineering leads | Eng Lead |
| Epics and Stories | What to build in order; one story = one Claude Code session | Eng + Product | Eng + PM |

"Total typical spec time: 3–5 business days."

## 5. What is still missing

| Item | Status |
|---|---|
| C1BMAD installer command | Not shown or said. On the Confluence page "Getting Started with c1-bmad" (Kaushik, 2026-10-05) and in the enterprise presentation's deck (to be posted). |
| Pod Context Kit repo or install command | Not shown or said. Cameron promised the link. Rahul's story ENTPMTS-143786 "pod-context-kit/c1-bmad install" is the Pod 2 record of doing it. |
| Morning plan invocation | Exact command not shown. |
| `data-sources.json` format | Named in the Morning Briefing ("no other repos tracked yet in data-sources.json"); contents not seen. |
| Pod 1 context repo name | Not stated. |
| Pod 3 context repo | Not created. By the pattern: `cof-sandbox/team-chesapeake-context` (inferred). |

## 6. The commands you will run, once you have the two links

Inferred from the sequence above; the two install commands are placeholders until the links arrive.

```bash
# 1. create the empty private repo in the cof-sandbox org on GitHub Enterprise, then
git clone <enterprise-github>/cof-sandbox/team-chesapeake-context.git
cd team-chesapeake-context

# 2. install C1BMAD (command from the "Getting Started with c1-bmad" page; npm-based)
<c1bmad installer command>
git add -A && git commit -m "Set up c1-bmad: skills, rules, standards, and templates"

# 3. install the Pod Context Kit scaffold (command from Cameron's link)
<pod-context-kit scaffold command>
git add -A && git commit -m "Install pod-context-kit dashboard scaffold for Team Chesapeake"

# 4. open Claude Code in the repo; the /bmad-* commands and the morning plan are now available
claude
```
Then, inside Claude Code: `/mcp` to confirm jira and github are connected; run the morning plan; `/bmad-project-context` to write the agent instructions; `/bmad-help` for what to do next; fill `content/planning/related-repos.md` and `data-sources.json` with Pod 3's repos; write today's `content/objectives/objectives-YYYY-MM-DD.md`; add the README linking `team-lawrence-context`.
