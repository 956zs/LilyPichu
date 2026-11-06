<img align="right" src="https://nyri4.github.io/LilyPichu/assets/preview.png" alt="Preview" width="40%">

<div align="left">
  <img align="left" src="https://i.imgur.com/2YhKmJz.png" alt="Logo" width="80" height="80">

  <h3 align="left">LilyPichu+</h3>
  <p align="left">Fork of NYRI4/LilyPichu: A theme based on @Melonturtle_ stream design</p>

  <br/>

  <a href="https://gibbu.github.io/ThemePreview/?file=https://cdn.jsdelivr.net/gh/NYRI4/LilyPichu/lilypichu.theme.css"><strong>» Theme Preview</strong></a>
  ・
  <a href="https://github.com/PinkSerenity/LilyPichu/issues"><del>Report an issue</del></a> (closed until I have completely refactored it)
  ・
  <a href="https://discord.gg/comfy-camp-811203761619337259">Join the support server</a>
</div>
<br/>

## 2.0 (November 2026)

Ported to Discord's current layout and class names:

- The right popout is back: member list, DM profile and "Active now" float in a card on the right, with "Stay comfy" and the jumping GIF when there is nothing to show (windows 1350px and wider).
- The user area sits under the popout, and profile popouts get the faded banner and square avatar.
- Selectors match the readable part of Discord's class names (`[class^="guilds_"]`), so the theme survives the hash changes Discord ships with every build. The old generated selector lists that made the theme lag are gone.
- Colors use Discord's current tokens (`--background-base-*`, `--text-default`, ...) and are all mixed from one base color.

The partials for the old layout are kept in `old/` for reference; they are not built.

## 📥 Installation

<br/>
<div align="left">
    <img align="left" src="https://i.imgur.com/LPH05EO.png" alt="BetterDiscord" width="45" height="45">
    <b><p align="left">BetterDiscord</b>
    <br/>Open Settings > Themes > Themes folder and copy the file downloaded <a href="https://betterdiscord.app/theme/LilyPichu">here</a></p>
</div>

<!-- <div align="left">
    <img align="left" src="https://i.imgur.com/pfS7jdg.png" alt="Replugged" width="45" height="45">
    <b><p align="left">Replugged</b>
    <br/>Click <a href="https://replugged.dev/install?identifier=nyria.lilypichu">here</a> and confirm the install in the client</p>
</div> -->

<div align="left">
    <img align="left" src="https://i.imgur.com/fXYKU5q.png" alt="Vencord" width="45" height="45">
    <b><p align="left">Vencord</b>
    <br/>Copy <code>https://raw.githubusercontent.com/PinkSerenity/LilyPichu/refs/heads/main/lilypichu.theme.css</code> into the box in Settings > Themes > Themes tab</p>
</div><br/>

## 🖌️ Customization

<br/>
<div align="left">
    <img align="left" src="https://i.imgur.com/LPH05EO.png" alt="BetterDiscord" width="45" height="45">
    <b><p align="left">BetterDiscord</b>
    <br/>Open Settings > Themes > Themes folder and open <code>lilypichu.theme.css</code></p>
</div>

<div align="left">
    <img align="left" src="https://i.imgur.com/fXYKU5q.png" alt="Vencord" width="45" height="45">
    <b><p align="left">Vencord & Replugged</b>
    <br/>Watch this epic tutorial</p>
</div>

https://user-images.githubusercontent.com/65369563/231574735-89da88ef-2cf1-4aa5-a157-3a66ce8d274b.mp4

### Variables

All of them live in the `:root` block of `lilypichu.theme.css`.

| Variable | Default | What it does |
| --- | --- | --- |
| `--base-color-dark` | `#6e3f4a` | Dark mode palette is mixed from this color (presets listed in the file) |
| `--base-color-light` | `#fd8787` | Same for light mode |
| `--accent-color` | `#c5536c` | Buttons, toggles, brand color |
| `--background-tertiary-alt` | `#ffc7d4` | App background; a color or `url("...") center / cover` |
| `--title-bar-text` | `#8c4a5a` | Title bar text and icons |
| `--jumping-gif` | jumping Lily | GIF in the empty popout |
| `--empty-popout-text` | `"Stay comfy"` | Text in the empty popout |
| `--member-list-title` / `--activity-title` | `"Member list"` / `"Active now"` | Popout headers |
| `--popout-width` / `--popout-right` | `320px` / `60px` | Popout size and distance from the window edge |
| `--border-radius` | `20px` | Corner radius |
| `--lily-font` | `"Nunito"` | Main font |

Remove the `overlay.css` import to hide the flowers and corner decorations.

## 🔧 Building

```sh
npm install
npm run build   # dist/main.css, dist/overlay.css, dist/lilypichu.theme.css
```

`dist/lilypichu.theme.css` has everything inlined, so it can be dropped into a themes folder without the hosted imports.
