(function () {
    "use strict";
    if (typeof Date.dp_locales === "undefined") {
        Date.dp_locales = {
            texts: {
                buttonTitle: "Valitse päivä",
                buttonLabel: "Napsauta hiirellä tai paina Enter-näppäintä tai välilyöntiä avataksesi kalenterin",
                prevButtonLabel: "Siirry edelliseen kuukauteen",
                nextButtonLabel: "Siirry seuraavaan kuukauteen",
                closeButtonTitle: "Sulje kalenteri",
                closeButtonLabel: "Sulje kalenteri",
                prevMonthButtonLabel: "Siirry edelliseen vuoteen",
                prevYearButtonLabel: "Siirry edelliseen kahteen vuosikymmeneen",
                nextMonthButtonLabel: "Siirry seuraavaan vuoteen",
                nextYearButtonLabel: "Siirry seuraavan kahteen vuosikymmeneen",
                changeMonthButtonLabel: "Napsauta hiirellä tai paina Enter-näppäintä tai välilyöntiä muuttaaksesi kuukauden",
                changeYearButtonLabel: "Napsauta hiirellä tai paina Enter-näppäintä tai välilyöntiä muuttaaksesi vuoden",
                changeRangeButtonLabel: "Napsauta hiirellä tai paina Enter-näppäintä tai välilyöntiä siirtyäksesi seuraavaan kahteen vuosikymmeneen",
                calendarHelp:
                    "- Nuoli ylös ja nuoli alas - Päiväysvalinta siirtyy edelliselle tai seuraavalle viikolle samalle viikonpäivälle. Valinta siirtyy seuraavaan tai edelliseen kuukauteen tarvittaessa.\r\n- Vasen ja oikea nuoli - Siirtyy päivän eteen ja taakse.\r\n- Control + Page Up - Siirtyy edellisen vuoden samalle päiväykselle.\r\n- Control + Page Down - Siirtyy seuraavan vuoden samalle päiväykselle.\r\n- Home - Siirtyy kuluvan kuukauden ensimmäiselle päivälle.\r\n- End - Siirtyy kuluvan kuukauden viimeiselle päivälle.\r\n- Page Up - Siirtyy edellisen kuukauden samalle päivälle.\r\n- Page Down - Siirtyy seuraavan kuukauden samalle päivälle.\r\n- Enter ja välilyönti - Sulkee kalenterin ja täyttää valitun päivän tekstikenttään.\r\n- Escape - Sulkee kalenterin ilman muutoksia.",
            },
            directionality: "LTR",
            month_names: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
            month_names_abbreviated: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
            month_names_narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
            day_names: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
            day_names_abbreviated: ["su", "ma", "ti", "ke", "to", "pe", "la"],
            day_names_short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
            day_names_narrow: ["S", "M", "T", "K", "T", "P", "L"],
            day_periods: { am: "ap.", noon: "keskipäivä", pm: "ip." },
            day_periods_abbreviated: { am: "ap.", noon: "keskipäivä", pm: "ip." },
            day_periods_narrow: { am: "ap.", noon: "kp.", pm: "ip." },
            quarter_names: ["1. neljännes", "2. neljännes", "3. neljännes", "4. neljännes"],
            quarter_names_abbreviated: ["1. nelj.", "2. nelj.", "3. nelj.", "4. nelj."],
            quarter_names_narrow: ["1", "2", "3", "4"],
            era_names: ["ennen Kristuksen syntymää", "jälkeen Kristuksen syntymän"],
            era_names_abbreviated: ["eKr.", "jKr."],
            era_names_narrow: ["eK", "jK"],
            full_format: "cccc d. MMMM y",
            long_format: "d. MMMM y",
            medium_format: "d.M.y",
            short_format: "d.M.y",
            firstday_of_week: 1,
        };
    }
})();
