# Piškvorky
Šablona prázdného projektu pro domácí úkol „Piškvorky“.

Cílem je postupně vytvořit na webu hru Piškvorky na poli 10×10, kterou bude moci hrát jeden hráč proti počítači.

# Zadání
Na tomto projektu budete pracovat postupně v pěti postupně navazujících úkolech. **Nepředbíhejte**, počkejte vždy na oficiální zadání daného úkolu – pro řešení úkolu potřebujete znalosti z odpovídajících lekcí a řešit úkol napřed by se vám nevyplatilo.

Zadání jednotlivých úkolů jsou zde:
* https://github.com/Czechitas-podklady-WEB/ukol-piskvorky-1/
* https://github.com/Czechitas-podklady-WEB/ukol-piskvorky-2/
* https://github.com/Czechitas-podklady-WEB/ukol-piskvorky-3/
* https://github.com/Czechitas-podklady-WEB/ukol-piskvorky-4/
* https://github.com/Czechitas-podklady-WEB/ukol-piskvorky-5/

# Úkol: Piškvorky 1/5

Toto je první ze série pěti úkolů, ve kterých si postupně naprogramuješ hru piškvorky.

## Zadání

1. Na GitHubu si otevři repozitář [piskvorky](https://github.com/Czechitas-podklady-WEB/piskvorky). Použij jej jako šablonu (_Use this template_ → _Create a new repository_) pro vytvoření **veřeného** repozitáře pojmenovaného **`piskvorky`** (jméno je důležité), do kterého budeš průběžně nahrávat svoji práci.

   ![s readme](zadani/s-public.png)

1. Otevři si VS Code ve složce, do které budeš chtít naklonovat složku `piskvorky` s úkolem (složka `piskvorky` se jako vždy vytvoří sama při klonování). Otevři si ve VS Code terminál a naklonuj si repository piskvorky příkazem (nezapomeň nahradit `<GITHUB_USERNAME>` tvým loginem na GitHubu):
   ```sh
   git clone https://github.com/<GITHUB_USERNAME>/piskvorky.git
   ```
1. Otevři si naklonovanou složku `piskvorky` znovu ve VS Code pomocí _File_ → _Open Folder_.

1. V průzkumníku souborů ve VS Code uvidíš otevřený projekt `PISKVORKY`, v něm bude jen soubor `README.md` (je tam také soubor `.gitignore` a adresář `.git`, ty jsou ale skryté).

1. V této složce založ soubor `index.html`.

1. Do `index.html` přidej základní strukturu HTML a mezi značky `<body></body>` vlož nadpis úrovně `h1` s textem `Piškvorky`. Stejný text přidej také do `<title>` v hlavičce dokumentu (`<head>`).

1. Spusť si v terminálu vývojový server pomocí `npx serve`. Otevři si vytvořenou stránku ve webovém prohlížeči. Výsledek by měl vypadat takto (jenom v adresním řádku bude port 3000 místo 5500, který je na screenshotu):

   ![základ](zadani/zaklad.png)

1. Příkazem `git add .` vyber nově vytvořený HTML soubor a s `git commit -m "Základní html"` dokonči první commit.

1. Přes `git push` nahraj první commit na github.

1. Zkontroluj, že na adrese `https://github.com/<GITHUB_USERNAME>/piskvorky` je nahraný `index.html`.

1. V nastavení povol GitHub Pages.

   ![nastavení](zadani/nastaveni.png)

   ![pages](zadani/pages.png)

   ![GitHub Pages](zadani/github-pages.png)

1. Odkaz na stránku přidej do popisku repozitáře v sekci Website.

   ![website](zadani/website.png)

1. Vedle souboru `index.html` vytvoř i `styly.css` a napoj je do stránky pomocí tagu `<link … />`.

1. Do stejné složky si stáhni obrázek [uvodni.jpg](https://github.com/Czechitas-podklady-WEB/Ukol-Piskvorky-1/raw/main/podklady/uvodni.jpg).

1. Postupnou úpravou HTML a CSS uprav stránku do této podoby:

   ![vizuál](zadani/vizual.png)

1. Nezapomeň průběžně commitovat a nahrávat na GitHub.

   1. Proveď změny. Uprav soubory. Napiš HTML, CSS.
   1. Pomocí `git add .` označ všechny nové změny.
   1. Přes `git commit -m "Název změn"` pojmenuj, čeho se změny týkají.
   1. S `git push` nahraj commit na Github.
   1. Vrať se do prvního kroku.

1. Pro spodní dvě tlačítka použij tag `<a>`.

   1. Prvnímu tlačítku, odkazu na pravidla nastav atribut `href="https://czechitas-podklady.cz/Piskvorky-pravidla/"`.
   1. Druhému nastav atribut `href="index.html"`. Bude tedy prozatím odkazovat na stránku, kde zrovna uživatel je. Stránku s hrou totiž doplníte až v dalších úkolech.

1. Tlačíka by se po najetí myši měly ztmavit.

   ![interakce](zadani/interakce.gif)

### Poznámky ke grafice

- Nadpis Piškvorky je fontem `Lobster`. Najdeš ho zdarma na Google Fonts.
- Různé vzdálenosti, velikosti textu odhadni od oka nebo přesně změř na obrázku výše.
- Gradient v pozadí jde z fialové ![](zadani/barva-615dad.png) `#615dad` do růžové ![](zadani/barva-ffc8da.png) `#ffc8da`.
- Další barvy, které se ti budou hodit:
  - Barva textu ![](zadani/barva-ffffff.png) `#ffffff`.
  - Podkladová tmavě modrá ![](zadani/barva-283e50.png) `#283e50`.
  - Tlačítko Pravidla ![](zadani/barva-1fcca4.png) `#1fcca4`. A po najetí myši ![](zadani/barva-1cbb96.png) `#1cbb96`.
  - Tlačítko Začít hrát ![](zadani/barva-0197f6.png) `#0197f6`. Po najetí ![](zadani/barva-0090e9.png) `#0090e9`.
- Úvodní text nemusíš opisovat. Stačí ho zkopírovat zde:
  > Piškvorky jsou velmi oblíbená společenská hra pro dva hráče.
  > Obvykle se hraje s tužkou a čtverečkovaným papírem.
  > Nyní můžete využít naši skvělou aplikaci, takže už nepotřebujete ani tužku a nemusíte hledat čtverečkovaný papír.
  > Přejeme vám hodně zábavy!
