# Xikita LP

Landing page estatica da Xikita Boutique, otimizada para conversao local e digital.

## Estrutura

- `index.html` - pagina principal
- `styles.css` - estilos responsivos
- `vercel.json` - config de deploy na Vercel

## Deploy na Vercel

1. Acesse `https://vercel.com/new`.
2. Importe o repositorio `performancedigital/xikitalp`.
3. Em **Framework Preset**, selecione `Other`.
4. Configure:
   - **Root Directory**: `./` (raiz)
   - **Build Command**: vazio
   - **Output Directory**: vazio
5. Clique em **Deploy**.

## Pos deploy (recomendado)

- Em `Settings > Domains`, conecte seu dominio.
- Atualize no `index.html`:
  - `[SUA CIDADE]`
  - `[telefone]`, `[email]`, `[endereco completo]`
  - links reais de Instagram, Facebook, Mercado Livre e WhatsApp.
- Ajuste `LocalBusiness` (JSON-LD) com os dados reais.
