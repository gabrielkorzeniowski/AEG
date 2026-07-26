const ENTRIES = [
    {
        id: "0001",
        title: "Nieprawidłowy Gebiet w Serviceauftrag",
        tags: [
            "Serviceauftrag",
            "Gebiet",
            "PLZ",
            "Techniker",
            "Fall",
            "Terminverschiebung"
        ],
        source: "Wewnętrzna baza procesów",
        content: `
            <h3>Opis problemu</h3>

            <p>
                W niektórych przypadkach może się zdarzyć, że numer
                <strong>Serviceauftrag</strong> wskazuje na inny
                <strong>Gebiet</strong> niż ten, który został automatycznie
                zaczytany przez system.
            </p>

            <p>
                Prawdopodobną przyczyną jest zmiana firmy serwisującej
                odpowiedzialnej za dany kod pocztowy (<strong>PLZ</strong>).
            </p>

            <h3>Możliwe objawy</h3>

            <ul>
                <li>Nie można prawidłowo ustawić lub zarezerwować terminu.</li>
                <li>
                    Po wpisaniu kodu pocztowego system pokazuje
                    innego technika niż ten widoczny w <strong>Fall</strong>.
                </li>
                <li>
                    <strong>Serviceauftrag</strong> wskazuje inne
                    <strong>Gebiet</strong>.
                </li>
            </ul>

            <h3>Rozwiązanie</h3>

            <p>
                Należy ponownie utworzyć <strong>Fall</strong>,
                korzystając z opcji utworzenia go jako kopii istniejącego
                zgłoszenia.
            </p>

            <p>
                Następnie należy utworzyć nowy
                <strong>Serviceauftrag</strong>.
            </p>
        `
    },

    {
        id: "0002",
        title: "Tworzenie Clone w Serviceauftrag po zamówieniu Ersatzteile",
        tags: [
            "Serviceauftrag",
            "Clone",
            "CloneSO",
            "Ersatzteile",
            "Terminverschiebung",
            "ISP",
            "Operatec",
            "WKD",
            "Techniker"
        ],
        source: "Wewnętrzna baza procesów",
        content: `
            <h3>Opis procesu</h3>

            <p>
                Jeżeli technik podczas wizyty zamówił wymagane
                <strong>Ersatzteile</strong>, po ich dostarczeniu
                konieczne jest ponowne umówienie wizyty technika.
            </p>

            <h3>ISP</h3>

            <p>
                Należy wysłać wiadomość e-mail do odpowiedniego
                <strong>SP</strong> z prośbą o ponowne terminowanie klienta.
            </p>

            <h3>Operatec</h3>

            <p>
                Należy postępować zgodnie z informacją zawartą
                w <strong>Mitteilung</strong> w <strong>Fall</strong>.
            </p>

            <h3>WKD</h3>

            <p>
                W przypadku <strong>WKD</strong> ponowne terminowanie
                wykonujemy poprzez utworzenie <strong>CloneSO</strong>.
            </p>

            <h3>Brak możliwości utworzenia Clone</h3>

            <p>
                Jeżeli nie można utworzyć <strong>Clone</strong>,
                należy ręcznie utworzyć nową pozycję
                w <strong>Serviceauftrag</strong>.
            </p>

            <p>
                Następnie w <strong>Mitteilung</strong> w
                <strong>Fall</strong> należy pozostawić informację,
                że Clone nie mógł zostać utworzony.
            </p>
        `
    },

    {
        id: "0003",
        title: "Geräteaustausch – proces wymiany urządzenia",
        tags: [
            "Geräteaustausch",
            "Austausch",
            "Angebot",
            "WKD",
            "Operatec",
            "ISP",
            "Lieferantengruppe",
            "Versicherung",
            "DL"
        ],
        source: "Wewnętrzna baza procesów",
        content: `
            <h3>Klient zgłasza konieczność wymiany urządzenia</h3>

            <p>
                Jeżeli klient twierdzi, że jego
                <strong>Gerät</strong> powinno zostać wymienione,
                ale w systemie nie ma jeszcze informacji dotyczących
                wymiany, należy skontaktować się z odpowiednią jednostką
                zgodnie z przypisanym <strong>Lieferantengruppe</strong>.
            </p>

            <h4>WKD</h4>

            <p>
                Sprawę należy skierować do odpowiedniego
                <strong>Bearbeitung</strong> przez
                <strong>Lieferantengruppe</strong>.
            </p>

            <h4>Operatec</h4>

            <p>
                Sprawę należy skierować do
                <strong>Operatec</strong> w ramach
                <strong>Lieferantengruppe</strong>.
            </p>

            <h4>ISP</h4>

            <p>
                Należy wysłać wiadomość e-mail do odpowiedniego
                <strong>SP</strong>.
            </p>

            <h3>Akceptacja oferty</h3>

            <p>
                Jeżeli klient znajduje się już na etapie akceptacji oferty,
                powinna być ona widoczna w <strong>Fall</strong>
                w zakładce <strong>Austausch</strong>.
            </p>

            <h3>Dostawa nowego urządzenia</h3>

            <p>
                Po zaakceptowaniu oferty klient otrzymuje informację
                o przewidywanym terminie dostawy.
            </p>

            <p>
                Dostawa jest realizowana do odpowiedniego
                <strong>DL</strong>, który kontaktuje się z klientem.
            </p>

            <h3>Problemy z wymianą</h3>

            <p>
                Problemy związane z procesem wymiany urządzenia należy
                kierować do <strong>Geräteaustausch</strong> poprzez
                odpowiednią <strong>Lieferantengruppe</strong>.
            </p>

            <p>
                W <strong>Mitteilung</strong> należy dokładnie opisać
                problem i sytuację klienta.
            </p>
        `
    }
];
