# React + Vite + shadcn/ui Template

Template moderno de React con las últimas versiones de todas las dependencias.

## Stack Tecnológico

| Categoría | Tecnología | Versión |
|-----------|------------|---------|
| Framework | React | 19.2 |
| Build Tool | Vite | 7.2 |
| Lenguaje | TypeScript | 5.9 |
| Estilos | Tailwind CSS | 4.1 |
| UI Components | shadcn/ui | latest |
| Routing | React Router | 7.8 |
| Data Fetching | TanStack Query | 5.87 |
| Formularios | React Hook Form + Zod | 7.71 / 3.25 |
| Iconos | Lucide React | 0.468 |

## Componentes shadcn/ui incluidos (53)

**Básicos:** accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, card, checkbox, collapsible, context-menu, dialog, drawer, dropdown-menu, empty

**Formularios:** calendar, command, field, form, input, input-group, input-otp, label, radio-group, select, slider, switch, textarea, toggle, toggle-group

**Navegación:** breadcrumb, menubar, navigation-menu, pagination, sidebar, tabs

**Feedback:** hover-card, popover, progress, skeleton, sonner, spinner, tooltip

**Layout:** resizable, scroll-area, separator, sheet, table

**Datos:** carousel, chart, item, kbd

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # 53 componentes shadcn/ui
│   └── theme-provider.tsx
├── contexts/
│   └── theme-context.ts # Context para tema dark/light
├── hooks/
│   ├── use-theme.ts     # Hook para cambiar tema
│   └── use-mobile.tsx   # Hook para detectar móvil
├── lib/
│   └── utils.ts         # Utilidad cn() para clases
├── App.tsx
├── main.tsx
└── index.css            # Variables CSS con OKLCH
```

## Instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPO>
cd react-vite-shadcn-ui

# Instalar dependencias (usa tu package manager preferido)
npm install
# o
yarn install
# o
pnpm install
# o
bun install

# Iniciar servidor de desarrollo
npm run dev   # o yarn dev, pnpm dev, bun dev
```

## Scripts disponibles

| Script | npm | yarn | pnpm | bun |
|--------|-----|------|------|-----|
| Desarrollo | `npm run dev` | `yarn dev` | `pnpm dev` | `bun dev` |
| Build producción | `npm run build` | `yarn build` | `pnpm build` | `bun run build` |
| Build desarrollo | `npm run build:dev` | `yarn build:dev` | `pnpm build:dev` | `bun run build:dev` |
| Preview | `npm run preview` | `yarn preview` | `pnpm preview` | `bun run preview` |
| Lint | `npm run lint` | `yarn lint` | `pnpm lint` | `bun run lint` |

## Características

- Dark/Light mode con persistencia en localStorage
- Colores en formato OKLCH (más moderno)
- Animaciones con tw-animate-css
- Tipografía con @tailwindcss/typography
- Alias de imports (@/components, @/lib, etc.)
- ESLint configurado con reglas de React
- Compatible con npm, yarn, pnpm y bun

## Agregar más componentes

```bash
# npm
npx shadcn@latest add <nombre-componente>

# pnpm
pnpm dlx shadcn@latest add <nombre-componente>

# yarn
yarn dlx shadcn@latest add <nombre-componente>

# bun
bunx shadcn@latest add <nombre-componente>
```

## Deploy

Compatible con:
- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting estático
