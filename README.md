# Clinic Management System

**An early-stage clinic administration interface built with Next.js and TypeScript.**

This repository explores front-end workflows for a medical clinic. It is a work in progress and **not a production-ready health record system**.

## Current implementation

The codebase includes a Next.js App Router project, reusable UI components, and sections organized around clinic operations:

- App route directories for appointments, authentication, feedback, finance, owners, and professionals.
- A sidebar component with navigation groups for patient management, scheduling, administration, and payments.
- Shared UI components under `src/components/ui/`.

**Important limitations:** the root page currently renders a basic “Login” placeholder; several sidebar entries still point to `#`. The presence of a menu item or route directory should not be interpreted as a completed feature. There are no automated tests configured in the current `package.json`.

## Technology

- Next.js 14 (App Router)
- React 18 and TypeScript
- Tailwind CSS and Radix UI
- React Hook Form and Zod dependencies

## Run locally

Requirements: a supported Node.js environment and npm.

```bash
git clone https://github.com/ghenriquec/clinic-management-system.git
cd clinic-management-system
npm ci
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

Project scripts:

```bash
npm run lint
npm run build
npm run start
```

The production build may require external access for the Inter Google Font configured in the root layout. These commands document how to run the project; they are not a claim that all flows are working.

## Project layout

```text
src/
├── app/           # Next.js App Router routes and root layout
├── components/    # Sidebar and shared UI components
├── lib/           # Application utilities
└── styles/        # Global styles
```

## Roadmap

The priorities below are **planned work**, not completed functionality.

- [ ] Replace placeholder navigation links with working routes.
- [ ] Implement authentication and authorization rules.
- [ ] Add persistent storage and validation for clinical operations.
- [ ] Introduce tests and reliable CI for business-critical flows.
- [ ] Document data handling, privacy, and security requirements before any real patient data is used.

## Security and privacy

Do not use real patient information in this prototype. Before any deployment with sensitive personal or health data, the system needs appropriate access controls, storage safeguards, auditability, and privacy review.

## Author

[Guilherme Henrique](https://github.com/ghenriquec) · [LinkedIn](https://www.linkedin.com/in/guihenriquecoelho/)
