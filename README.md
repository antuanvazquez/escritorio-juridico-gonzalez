# Escritorio Jurídico González & Asociados

Sitio web estático para Abog. Jorge González — Valencia, Estado Carabobo.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build
```

El export estático se genera en `out/`.

## Despliegue (Vercel)

1. Verificar cuenta: `vercel whoami` (no debe ser cocinaquenutre)
2. Importar repo desde GitHub bajo cuenta personal
3. Framework preset: Next.js (detecta export estático automáticamente)
