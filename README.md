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

**Repo:** https://github.com/antuanvazquez/escritorio-juridico-gonzalez

### Pasos (cuenta personal — NO cocinaquenutre)

1. Inicia sesión en [vercel.com](https://vercel.com) con tu cuenta personal
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Importa `antuanvazquez/escritorio-juridico-gonzalez`
4. Verifica que el **Team** sea tu cuenta personal antes de Deploy
5. Framework: Next.js (auto-detectado). Sin variables de entorno necesarias.

URL esperada: `https://escritorio-juridico-gonzalez.vercel.app`

### CLI (opcional)

```bash
vercel logout   # si estaba ligado a otra cuenta
vercel login    # cuenta personal
vercel whoami   # confirmar que NO es cocinaquenutre
vercel --prod
```
