# HFM Markets — React Front-end Exercise

A hand-structured React/Vite implementation based on the supplied HF Markets front-end exercise requirements.

## Requirements covered
- React functional components + hooks
- Responsive desktop/tablet/mobile layout
- Controlled country + phone interaction
- Countries include Cyprus (+357), United Kingdom (+44), Germany (+49), plus Greece and UAE
- Client-side email validation
- `react-hook-form` + Yup validation
- Controlled form submission with a demo success state and console payload
- No jQuery / no plain HTML template implementation
- Component-based structure with reusable field/logo/header sections
- Accessible labels, focus states, navigation landmarks and responsive mobile navigation

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Notes

The exercise brief links to a private Figma file. The supplied assessment document was used as the source of truth for the functional requirements. The linked Figma file could not be inspected with the available Figma permissions, so this implementation uses a manually authored HFM-inspired visual system rather than claiming pixel-perfect Figma parity.

The form is intentionally a demo: it does not create a real trading account or send personal data to a server.
