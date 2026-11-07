<img align="right" src="assets/preview.png" alt="Preview" width="40%">

<div align="left">
  <img align="left" src="https://i.imgur.com/2YhKmJz.png" alt="Logo" width="80" height="80">

  <h3 align="left">LilyPichu+</h3>
  <p align="left">A theme based on @Melonturtle_ stream design. Maintained fork of <a href="https://github.com/PinkSerenity/LilyPichu">PinkSerenity/LilyPichu</a>, originally <a href="https://github.com/NYRI4/LilyPichu">NYRI4/LilyPichu</a>.</p>

  <br/>

  <a href="https://github.com/956zs/LilyPichu/issues"><strong>» Report an issue</strong></a>
</div>
<br/>

## 2.7

- Code blocks are rounded dark cards, inline code is an accent chip, and quote bars use the accent with a soft glow.
- Chat dividers fade at both ends with the date in a small pill; the "new messages" line and its NEW tag use the accent.
- User and server settings sidebars: accent pill on the selected page, ✿ before section labels.
- Voice user rows in the channel list are pills, and the speaking ring over text chats uses the accent.

## 2.6

- Rounded message box with an accent glow while typing.
- Round reaction chips; yours are filled with the accent.
- Frosted-glass context menus with an accent pill on the focused item, accent tooltips, accent guild selection pill, accent scrollbars and keyboard focus rings.
- Light motion (menus pop in, guild icons lift on hover), only when Discord runs with full motion.

## 2.5

- Embeds and Components V2 containers are rounded cards with a soft accent tint; their side bar becomes a rounded pill that keeps each bot's own color.
- Secondary buttons are tinted with the accent.

## 2.4

- Gradients (`--gradients: on`, with shift, strength and angle), a background image with blur and dim, and `--decorations: off`.
- Everything can be set from a panel with the [LilyPichuSettings](https://github.com/956zs/Equicord-Plugin) Equicord plugin.

## 2.3

- `--home-icon`: any image for the Home (Direct Messages) button, keeping its rounded shape and the unread badge cutout. Unset, Discord's icon or your Nitro app icon shows.

## 2.2

- Right "control center": voice, stream and quest panels move to the right above the account bar, and the member list / DM profile end right above them at any height (CSS anchor positioning; older clients keep the 2.1 layout). The server and channel lists run to the bottom.
- The selected channel or DM is an accent pill, categories get a ✿ and a fading line, and member list groups are centered between ✦ lines.

## 2.1

- The pink frame and the title bar text follow the base color, and `--decoration-filter` recolors the corner decorations, so every preset looks consistent.
- Hover and selected rows in lists are tinted with the accent.
- App notices float as a rounded bar above the card.
- Fixed: a pink hole around the voice / stream panels, and a flash when full-screen settings close.

## 2.0 (November 2026)

Ported to Discord's current layout and class names:

- The right popout is back: member list, DM profile and "Active now" float in a card on the right, with "Stay comfy" and the jumping GIF when there is nothing to show (windows 1350px and wider).
- The user area sits under the popout, and profile popouts get the faded banner and square avatar.
- Selectors match the readable part of Discord's class names (`[class^="guilds_"]`), so the theme survives the hash changes Discord ships with every build. The old generated selector lists that made the theme lag are gone.
- Narrow or short windows keep the frame, the rounded card and inset member list / DM profile cards instead of falling back to plain Discord.
- Mentions, replies and jump highlights use the accent instead of Discord's yellow and blurple.
- Colors use Discord's current tokens (`--background-base-*`, `--text-default`, ...) and are all mixed from one base color.

The partials for the old layout are kept in `old/` for reference; they are not built.

Pushes to `main` publish the built CSS to the `release` branch, which the theme file imports. Other branches publish to `debug` for testing: replace `refs/heads/release` with `refs/heads/debug` in the two imports to try them.

## 📥 Installation

<br/>
<div align="left">
    <img align="left" src="https://i.imgur.com/LPH05EO.png" alt="BetterDiscord" width="45" height="45">
    <b><p align="left">BetterDiscord</b>
    <br/>Open Settings > Themes > Themes folder and put <a href="https://raw.githubusercontent.com/956zs/LilyPichu/main/lilypichu.theme.css"><code>lilypichu.theme.css</code></a> in it</p>
</div>

<!-- <div align="left">
    <img align="left" src="https://i.imgur.com/pfS7jdg.png" alt="Replugged" width="45" height="45">
    <b><p align="left">Replugged</b>
    <br/>Click <a href="https://replugged.dev/install?identifier=nyria.lilypichu">here</a> and confirm the install in the client</p>
</div> -->

<div align="left">
    <img align="left" src="https://i.imgur.com/fXYKU5q.png" alt="Vencord" width="45" height="45">
    <b><p align="left">Vencord / Equicord</b>
    <br/>Copy <code>https://raw.githubusercontent.com/956zs/LilyPichu/refs/heads/main/lilypichu.theme.css</code> into the box in Settings > Themes > Online Themes. To customize, download the file into the themes folder instead and edit it</p>
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
| `--gradients` / `--gradient-shift` / `--gradient-strength` / `--gradient-angle` | `off` / `-45` / `60%` / `160deg` | Gradients on the frame, lists, chat and popout |
| `--background-image` / `--background-blur` / `--background-dim` | `none` / `0px` / `0%` | Image around the window, blurred and dimmed |
| `--decorations` | `on` | `off` hides the flowers and corners |
| `--home-icon` | unset | Image for the Home button, e.g. `url("https://...")`; local files on Vencord/Equicord: copy into the themes folder and use `url("vencord:///themes/file.png")` |
| `--profile-themes` | `lily` | `lily` recolors Nitro profile themes (popouts, DM profile, profile modal); `keep` shows each user's colors |

Remove the `overlay.css` import to hide the flowers and corner decorations. In the bundled `dist/lilypichu.theme.css`, delete everything between the `begin dist/overlay.css` and `end dist/overlay.css` comments instead.

## 🔧 Building

```sh
npm install
npm run build   # dist/main.css, dist/overlay.css, dist/lilypichu.theme.css
```

`dist/lilypichu.theme.css` has everything inlined, so it can be dropped into a themes folder without the hosted imports.
