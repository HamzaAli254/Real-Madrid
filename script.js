const players = [
    {name:"Arthur Johnson",position:"Midfielder",country:"England",duration:"1902-1904", 
        trophies:"1 Copa del Rey/ Scored the club's first-ever official goal.",image:"Players/Arthur Johnson.jpg"},
    {name:"Pedro Parages",position:"Forward",country:"Spain",duration:"1902-1909", 
        trophies:"4 Copa del Rey",image:"Players/Pedro Parages.jpg"},
    {name:"Federico Revuelto",position:"Forward",country:"Guatemala",duration:"1902-1912", 
        trophies:"4 Copa del Rey",image:"Players/Federico Revuelto.jpg"},
    {name:"José Giralt",position:"Midfielder",country:"Cuba",duration:"1902-1907", 
        trophies:"3 Copa del Rey",image:"Players/José Giralt.jpg"},
    {name:"Armando Giralt",position:"Forward",country:"Cuba",duration:"1902-1907", 
        trophies:"3 Copa del Rey",image:"Players/Armando Giralt.jpg"},
    {name:"Mario Giralt",position:"Defender",country:"Cuba",duration:"1902-1907", 
        trophies:"3 Copa del Rey",image:"Players/Mario Giralt.jpg"},
    {name:"Enrique Normand",position:"Midfielder",country:"France",duration:"1902-1915", 
        trophies:"4 Copa del Rey",image:"Players/Enrique Normand.jpg"},
    {name:"Antonio Neyra",position:"Forward",country:"Spain",duration:"1902-1909", 
        trophies:"4 Copa del Rey",image:"Players/Antonio Neyra.jpg"},
    {name:"Manuel Yarza",position:"Defender",country:"Spain",duration:"1904-1908", 
        trophies:"4 Copa del Rey",image:"Players/Manuel Yarza.jpg"},
    {name:"José Berraondo",position:"Defender",country:"Spain",duration:"1904-1909", 
        trophies:"4 Copa del Rey",image:"Players/José Berraondo.jpg"},
    {name:"Manuel Alcade",position:"Goalkeeper",country:"Spain",duration:"1904-1907", 
        trophies:"3 Copa del Rey",image:"Players/Manuel Alcade.jpg"},
    {name:"Lindsey Baonza",position:"Goalkeeper",country:"Spain",duration:"1907-1909", 
        trophies:"1 Copa del Rey",image:"Players/Lindsey Baonza.jpg"},
    {name:"Sotero Aranguren",position:"Midfielder",country:"Argentina",duration:"1911-1918", 
        trophies:"1 Copa del Rey",image:"Players/Sotero Aranguren.jpg"},
    {name:"Eulogio Aranguren",position:"Midfielder",country:"Argentina",duration:"1911-1921", 
        trophies:"1 Copa del Rey",image:"Players/Eulogio Aranguren.jpg"},
    {name:"Alberto Machimbarre",position:"Midfielder",country:"Spain",duration:"1913-1922", 
        trophies:"1 Copa del Rey",image:"Players/Alberto Machimbarre.jpg"},
    {name:"Santiago Bernabéu",position:"Forward",country:"Spain",duration:"1913-1927", 
        trophies:"1 Copa del Rey/ Longtime club Captin.",image:"Players/Santiago Bernabéu.jpg"},
    {name:"René Petit",position:"Midfielder",country:"France",duration:"1914-1917", 
        trophies:"1 Copa del Rey",image:"Players/René Petit.jpg"},
    {name:"Juan de Cárcer",position:"Goalkeeper",country:"Spain",duration:"1916-1919", 
        trophies:"1 Copa del Rey",image:"Players/Juan de Cárcer.jpg"},
    {name:"Juan Monjardín",position:"Forward",country:"Spain",duration:"1918-1929", 
        trophies:"1 Campeonato Regional Centro",image:"Players/Juan Monjardín.jpg"},
    {name:"Perico Escobal",position:"Defender",country:"Spain",duration:"1921-1927", 
        trophies:"4 Campeonato Regional Centro",image:"Players/Perico Escobal.jpg"},
    {name:"Félix Quesada",position:"Defender",country:"Spain",duration:"1922-1936", 
        trophies:"2 La Liga, 2 Copa del Rey",image:"Players/Félix Quesada.jpg"},
    {name:"Pachuco Prats",position:"Midfielder",country:"Spain",duration:"1926-1933", 
        trophies:"2 La Liga",image:"Players/Pachuco Prats.jpg"},
    {name:"José Maria Peña",position:"Midfielder",country:"Spain",duration:"1926-1932", 
        trophies:"1 La Liga",image:"Players/José Maria Peña.jpg"},
    {name:"Jaime Lazcano",position:"Forward",country:"Spain",duration:"1928-1935", 
        trophies:"2 La Liga, 1 Copa del Rey/ Scored the first-ever La Liga goal in Real Madrid hostory",image:"Players/Jaime Lazcano.jpg"},
    {name:"Gaspar Rubio",position:"Forward",country:"Spain",duration:"1928-1930", 
        trophies:"2 Campeonato Regional Centro/ Club top scorer across all early regional tournments with 70+ goals.",image:"Players/Gaspar Rubio.jpg"},
    {name:"Monchín Triana",position:"Forward",country:"Spain",duration:"1928-1932", 
        trophies:"1 La Liga",image:"Players/Monchín Triana.jpg"},
    {name:"Ricardo Zamora",position:"Goalkeeper",country:"Spain",duration:"1930-1936", 
        trophies:"2 La Liga, 2 Copa del Rey/ The legendary pre-war goalkeeper, Best Goalkeeper at the FIFA World Cup; the historic Zamora Trophy is named in his honor.",image:"Players/Ricardo Zamora.jpg"},
    {name:"Hilario",position:"Midfielder",country:"Spain",duration:"1930-1936", 
        trophies:"2 La Liga, 2 Copa del Rey",image:"Players/Hilario.jpg"},
    {name:"Eugenio Hilario",position:"Forward",country:"Spain",duration:"1930-1936", 
        trophies:"2 La Liga, 2 Copa del Rey",image:"Players/Eugenio Hilario.jpg"},
    {name:"Luis Regueiro",position:"Forward",country:"Spain",duration:"1931-1936", 
        trophies:"2 La Liga, 2 Copa del Rey",image:"Players/Luis Reguerio.jpg"},
     {name:"Jacinto Quincoces",position:"Defender",country:"Spain",duration:"1931-1936", 
        trophies:"2 La Liga, 2 Copa del Rey",image:"Players/Jacinto Quincoces.jpg"},
    {name:"Ciriaco Errasti",position:"Defender",country:"Spain",duration:"1931-1936", 
        trophies:"2 La Liga, 2 Copa del Rey",image:"Players/Ciriaco Errasti.jpg"},
    {name:"Manuel Olivares",position:"Forward",country:"Spain",duration:"1931-1934", 
        trophies:"2 La Liga, 1 Copa del Rey/ Pichichi Trophy winner in 1932/33 season with 16 goals.",image:"Players/Manuel Olivares.jpg"},
    {name:"Josep Samitier",position:"Midfielder",country:"Spain",duration:"1932-1934", 
        trophies:"1 La Liga, 1 Copa del Rey",image:"Players/Josep Samitier.jpg"},
    {name:"Pedro Regueiro",position:"Midfielder",country:"Spain",duration:"1932-1936", 
        trophies:"1 La Liga, 2 Copa del Rey",image:"Players/Pedro Regueiro.jpg"},
    {name:"Simón Lecue",position:"Midfielder",country:"Spain",duration:"1935-1942", 
        trophies:"1 Copa del Rey",image:"Players/Simón Lecue.jpg"},
    {name:"Sabino Barinaga",position:"Forward",country:"Spain",duration:"1939-1950", 
        trophies:"2 Copa del Rey/ Famed for later scoring the inaugural goal at the newly opened Chamartín (Bernabéu) Stadium.",image:"Players/Sabino Barinaga.jpg"},
    {name:"Manuel Alday",position:"Forward",country:"Spain",duration:"1939-1944", 
        trophies:"Copa de España Runner-up/ Finifhed as the club's top goalscorer during the early 1940s post-war transition.",image:"Players/Manuel Alday.jpg"},
    {name:"Juan Antonio Ipiña",position:"Midfielder",country:"Spain",duration:"1939-1951", 
        trophies:"2 Copa del Rey, 1 Copa Eva Duarte",image:"Players/Juan Antonio Ipiña.jpg"},
    {name:"Chus Alonso",position:"Forward",country:"Spain",duration:"1939-1948", 
        trophies:"2 Copa del Rey",image:"Players/Chus Alonso.jpg"},
    {name:"Enrique Esquiva",position:"Goalkeeper",country:"Spain",duration:"1939-1940", 
        trophies:"Runner-up in 1940 Copa del Rey",image:"Players/Enrique Esquiva.jpg"},
    {name:"José Manuel Marzá",position:"Goalkeeper",country:"Spain",duration:"1940-1943", 
        trophies:"None",image:"Players/José Manuel Marzá.jpg"},
    {name:"Mario Inchausti",position:"Goalkeeper",country:"Cuba",duration:"1941-1942", 
        trophies:"None",image:"Players/Mario Inchausti.jpg"},
    {name:"Gonzalo Marzá",position:"Goalkeeper",country:"Spain",duration:"1941-1944", 
        trophies:"None",image:"Players/Gonzalo Marzá.jpg"},
    {name:"Antonio Alsúa",position:"Forward",country:"Spain",duration:"1941-1948", 
        trophies:"2 Copa del Rey",image:"Players/Antonio Alsúa.jpg"},
    {name:"Félix Huete",position:"Midfielder",country:"Spain",duration:"1941-1948", 
        trophies:"2 Copa del Rey",image:"Players/Félix Huete.jpg"},
    {name:"Miguel Muñoz",position:"Midfielder",country:"Spain",duration:"1948-1958", 
        trophies:"3 European Cup, 4 La Liga/ First player to captain Real Madrid to a European Cup title (1956)",image:"Players/Miguel Muñoz.jpg"},
    {name:"José Bañón",position:"Goalkeeper",country:"Spain",duration:"1943-1949", 
        trophies:"2 Copa del Rey, 1 Copa Eva Duarte/ Zamora Trophy winner in 1946",image:"Players/José Bañón.jpg"},
    {name:"Juanito Alonso",position:"Goalkeeper",country:"Spain",duration:"1949-1960", 
        trophies:"5 European Cups, 5 La Liga, 2 Latin Cup, 1 Intercontinental Cup/ Zamora Trophy winner in 1955",image:"Players/Juanito Alonso.jpg"},
    {name:"José María Zárraga",position:"Midfielder",country:"Spain",duration:"1949-1962", 
        trophies:"5 European Cup, 6 La Liga, 1 Copa del Rey, 1 Intercontinental Cup/ Captained the team in the 1959 and 1960 European Cup finals.",image:"Players/Joseé María Zárraga.jpg"},
    {name:"Rafael Lesmes",position:"Defender",country:"Spain",duration:"1952-1960", 
        trophies:"5 European Cup, 4 La Liga, 1 Intercontinental Cup",image:"Players/Rafael Lesmes.jpg"},
    {name:"Alfredo Di Stéfano",position:"Forward",country:"Argentina",duration:"1953-1964", 
        trophies:"5 European Cup, 8 La Liga, 1 Copa del Rey, 1 Intercontinental Cup/ 2 Ballon d'Or, 5 Pichichi Trophy, 2 European Cup",image:"Players/Alfredo Di Stéfano.jpg"},
    {name:"Francisco Gento",position:"Forward",country:"Spain",duration:"1953-1971", 
        trophies:"6 European Cup, 12 La Liga, 2 Copa del Rey, 1 Intercontinental Cup/ Holds the all-time world football record for most European Cups (6) won by a single player.",image:"Players/Francisco Gento.jpg"},
    {name:"Enrique Mateos",position:"Forward",country:"Spain",duration:"1953-1961", 
        trophies:"4 European Cup, 5 La Liga",image:"Players/Enrique Mateos.jpg"},
    {name:"Marquitos",position:"Defender",country:"Spain",duration:"1954-1962", 
        trophies:"5 European Cup, 5 La Liga, 1 Copa del Rey, 1 Intercontinental Cup",image:"Players/Marquitos.jpg"},
    {name:"Héctor Rial",position:"Forward",country:"Argentina",duration:"1954-1961", 
        trophies:"5 European Cup, 4 La Liga, 1 Intercontinental Cup",image:"Players/Héctor Rial.jpg"},
    {name:"Ramón Marsal",position:"Forward",country:"Spain",duration:"1955-1959", 
        trophies:"3 European Cup, 2 La Liga",image:"Players/Ramón Marsal.jpg"},
    {name:"Raymond Kopa",position:"Midfielder",country:"France",duration:"1956-1959", 
        trophies:"3 European Cup, 2 La Liga/ Ballon d'Or winner in 1958, Ballon d'Or Silver Ball (1957), Ballon d'Or Bronze Ball (1956,1959)",image:"Players/Raymond Kopa.jpg"},
    {name:"Pedro Casado",position:"Defender",country:"Spain",duration:"1956-1966", 
        trophies:"1 European Cup, 6 La Liga, 1 Copa del Rey",image:"Players/Pedro Casado.jpg"},
    {name:"Juan Santisteban",position:"Midfielder",country:"Spain",duration:"1956-1961 , 1963-1964", 
        trophies:"4 European Cup, 4 La Liga, 1 Intercontinental Cup",image:"Players/Juan Santisteban.jpg"},
    {name:"José Santamaría",position:"Defender",country:"Uruguay",duration:"1957-1966", 
        trophies:"4 European Cup, 6 La Liga, 1 Copa del Rey, 1 Intercontinental Cup",image:"Players/José Santamaría.jpg"},
    {name:"Rogelio Domínguez",position:"Goalkeeper",country:"Argentina",duration:"1957-1962", 
        trophies:"3 European Cup, 3 La Liga, 1 Intercontinental Cup",image:"Players/Rogelio Domínguez.jpg"},
    {name:"Ferenc Puskás",position:"Forward",country:"Hungary",duration:"1958-1966", 
        trophies:"3 European Cup, 5 La Liga, 1 Copa del Rey, 1 Intercontinental Cup/ Ballon d'Or Silver Ball (1960), 4 Pichichi Trophy (1960,1961,1963,1964), 3 European Cup Top Scorer.",image:"Players/Ferenc Puskás.jpg"},
    {name:"Pachín",position:"Defender",country:"Spain",duration:"1959-1968", 
        trophies:"2 European Cup, 7 La Liga, 1 Intercontinental Cup",image:"Players/Pachín.jpg"},
    {name:"Canário",position:"Forward",country:"Brazil",duration:"1959-1962", 
        trophies:"1 European Cup, 2 La Liga, 1 Intercontinental Cup",image:"Players/Canário.jpg"},
    {name:"Vicente Train",position:"Goalkeeper",country:"Spain",duration:"1960-1964", 
        trophies:"4 La Liga, 1 Copa del Rey/ 3 Zamora Trophy (1960/61 , 1961/1962 , 1962/1963)",image:"Players/Vicente Train.jpg"},
    {name:"Luis del Sol",position:"Midfielder",country:"Spain",duration:"1960-1962", 
        trophies:"1 European Cup, 2 La Liga, 1 Copa del Rey, 1 Intercontinental Cup",image:"Players/Luis del Sol.jpg"},
    {name:"Felo",position:"Midfielder",country:"Spain",duration:"1960-1965", 
        trophies:"2 La Liga, 1 European Cup",image:"Players/Felo.jpg"},
    {name:"José Araquistáin",position:"Goalkeeper",country:"Spain",duration:"1961-1968", 
        trophies:"1 Eurpean Cup, 6 La Liga",image:"Players/José Araquistáin.jpg"},
    {name:"Ignacio Zoco",position:"Midfielder",country:"Spain",duration:"1962-1974", 
        trophies:"1 European Cup, 7 La Liga, 2 Copa del Rey",image:"Players/Ignacio Zoco.jpg"},
    {name:"Amancio Amaro",position:"Forward",country:"Spain",duration:"1962-1976", 
        trophies:"1 European Cup, 9 La Liga, 3 Copa del Rey/ Ballon d'Or Bronze Ball (1964), 2 Pichichi Trophy (1969,1970).",image:"Players/Amancio Amaro.jpg"},
    {name:"Serena",position:"Forward",country:"Spain",duration:"1963-1968", 
        trophies:"1 European Cup, 4 La Liga (Scored the winning goal in the 1966 Final)",image:"Players/Serena.jpg"},
    {name:"Manuel Sanchís Martínez",position:"Defender",country:"Spain",duration:"1964-1971", 
        trophies:"1 European Cup, 4 La Liga, 1 Copa del Rey",image:"Players/Manuel Sanchís Martínez.jpg"},
    {name:"Pirri",position:"Midfielder",country:"Spain",duration:"1964-1980", 
        trophies:"1 European Cup, 10 La Liga, 4 Copa del Rey/ Iconic goalscoring midfielder; netted 172 goals for the club",image:"Players/Pirri.jpg"},
    {name:"Ramón Grosso",position:"Forward",country:"Spain",duration:"1964-1976", 
        trophies:"1 European Cup, 7 La Liga, 3 Copa del Rey",image:"Players/Ramón Grosso.jpg"},
    {name:"Manuel Velázquez",position:"Midfielder",country:"Spain",duration:"1965-1977", 
        trophies:"1 European Cup, 6 La Liga, 3 Copa del Rey",image:"Players/Manuel Velázquez.jpg"},
    {name:"Miguel Ángel",position:"Goalkeeper",country:"Spain",duration:"1967-1986", 
        trophies:"8 La Liga, 5 Copa del Rey, 2 UEFA Cup/ Ricardo Zamora Trophy (1975/76)",image:"Players/Miguel Ángel.jpg"},
    {name:"Vicente del Bosque",position:"Midfielder",country:"Spain",duration:"1968-1984", 
        trophies:"5 La Liga, 4 Copa del Rey",image:"Players/Vicente del Bosque.jpg"},
    {name:"Gregorio Benito",position:"Defender",country:"Spain",duration:"1969-1982", 
        trophies:"6 La Liga, 5 Copa del Rey",image:"Players/Gregorio Benito.jpg"},
    {name:"Santillana",position:"Forward",country:"Spain",duration:"1971-1988", 
        trophies:"9 La Liga, 4 Copa del Rey, 2 UEFA Cup",image:"Players/Santillana.jpg"},
    {name:"Mariano García Remón",position:"Goalkeeper",country:"Spain",duration:"1971-1986", 
        trophies:"7 La Liga, 4 Copa del Rey, 2 UEFA Cup",image:"Players/Mariano García Remón.jpg"},
    {name:"José Antonio Camacho",position:"Defender",country:"Spain",duration:"1973-1989", 
        trophies:"9 La Liga, 5 Copa del Rey, 2 UEFA Cup, 1 Copa de la Liga",image:"Players/José Antonio Camacho.jpg"},
    {name:"Günter Netzer",position:"Midfielder",country:"Germany",duration:"1973-1976", 
        trophies:"2 La Liga, 2 Copa del Rey",image:"Players/Günter Netzer.jpg"},
    {name:"Roberto Martínez",position:"Forward",country:"Argentina",duration:"1974-1980", 
        trophies:"5 La Liga, 1 Copa del Rey",image:"Players/Roberto Martínez.jpg"},
    {name:"Henning Jensen",position:"Forward",country:"Denmark",duration:"1976-1979", 
        trophies:"2 La Liga",image:"Players/Henning Jensen.jpg"},
    {name:"Isidoro San José",position:"Defender",country:"Spain",duration:"1976-1986", 
        trophies:"4 La Liga, 2 Copa del Rey, 2 UEFA Cup",image:"Players/Isidoro San José.jpg"},
    {name:"Juanito",position:"Forward",country:"Spain",duration:"1977-1987", 
        trophies:"5 La Liga, 2 Copa del Rey, 2 UEFA Cup/ Pichichi Trophy (1983/84) with 17 goals",image:"Players/Juanito.jpg"},
    {name:"Uli Stielike",position:"Midfielder",country:"Germany",duration:"1977-1985", 
        trophies:"3 La Liga, 2 Copa del Rey, 1 UEFA Cup/ 4 Don Balón Award for Best Foreign Player in La Liga (1979 , 1980 , 1981 , 1982)",image:"Players/Uli Steilike.jpg"},
    {name:"Isidro Díaz",position:"Forward",country:"Spain",duration:"1977-1985", 
        trophies:"3 La Liga, 2 Copa del Rey, 1 UEFA Cup",image:"Players/Isidro Díaz.jpg"},
    {name:"Ángel de los Santos",position:"Midfielder",country:"Spain",duration:"1979-1985", 
        trophies:"1 La Liga, 2 Copa del Rey, 1 UEFA Cup",image:"Players/Ángel de los Santos.jpg"},
    {name:"Laurie Cunningham",position:"Forward",country:"England",duration:"1979-1984", 
        trophies:"1 La Liga, 2 Copa del Rey",image:"Players/Laurie Cunningham.jpg"},
    {name:"Agustín Rodríguez",position:"Goalkeeper",country:"Spain",duration:"1980-1990", 
        trophies:"5 La Liga, 2 Copa del Rey, 2 UEFA Cup/ Ricardo Zamora Trophy (1982/1983)",image:"Players/Agustín Rodríguez.jpg"},
    {name:"Ricardo Gallego",position:"Midfielder",country:"Spain",duration:"1980-1989", 
        trophies:"4 La Liga, 2 Copa del Rey, 2 UEFA Cup",image:"Players/Ricardo Gallego.jpg"},
    {name:"Pineda",position:"Forward",country:"Spain",duration:"1980-1985", 
        trophies:"1 Copa del Rey, 1 UEFA Cup",image:"Players/Pineda.jpg"},
    {name:"Miguel Porlán'Chendo'",position:"Defender",country:"Spain",duration:"1982-1998", 
        trophies:"7 La Liga, 2 Copa del Rey, 1 UEFA Champions League, 2 UEFA Cup",image:"Players/Miguel Porlán'Chendo'.jpg"},
    {name:"John Metgod",position:"Defender",country:"Netherlands",duration:"1982-1984", 
        trophies:"1983 European Cup Winners' Cup Runner-up",image:"Players/John Metgod.jpg"},
    {name:"Jorge Valdano",position:"Forward",country:"Argentina",duration:"1984-1987", 
        trophies:"2 La Liga, 2 UEFA Cup, 1 Copa de la Liga",image:"Players/Jorge Valdano.jpg"},
    {name:"Hugo Sánchez",position:"Forward",country:"Mexico",duration:"1985-1992", 
        trophies:"5 La Liga, 1 Copa del Rey, 3 Supercopa de España, 1 UEFA Cup/ 4 Pichichi Trophies (1985/86 , 1986/87 , 1987/88 , 1989/90), 1 European Golden Shoe (1989/90), 2 Don Balón Best Foreign Player Awards (1986/87 , 1989/90)",image:"Players/Hugo Sánchez.jpg"},
    {name:"Antonio Maceda",position:"Defender",country:"Spain",duration:"1985-1988", 
        trophies:"3 La Liga, 1 UEFA Cup",image:"Players/Antonio Maceda.jpg"},
    {name:"Jesús Solana",position:"Defender",country:"Spain",duration:"1985-1991", 
        trophies:"5 La Liga, 1 Copa del Rey, 3 Supercopa de España, 1 UEFA Cup",image:"Players/Jesús Solana.jpg"},
    {name:"Paco Muñoz Pérez",position:"Defender",country:"Spain",duration:"1985-1988", 
        trophies:"3 La Liga, 1 UEFA Cup",image:"Players/Paco Muñoz Pérez.jpg"},
    {name:"Rafeal Gordillo",position:"Midfielder",country:"Spain",duration:"1985-1992", 
        trophies:"5 La Liga, 1 Copa del Rey, 3 Supercopa de España, 1 UEFA Cup",image:"Players/Rafeal Gordillo.jpg"},
    {name:"Paco Buyo",position:"Goalkeeper",country:"Spain",duration:"1986-1997", 
        trophies:"6 La Liga, 2 Copa del Rey, 4 Supercopa de España, 1 Copa Ibero-American Cup/ 2 Zamora Trophies (1987/88 , 1989/90)",image:"Players/Paco Buyo.jpg"},
    {name:"Miguel Tendillo",position:"Defender",country:"Spain",duration:"1987-1992", 
        trophies:"3 La Liga, 1 Copa del Rey, 3 Supercopa de Españs",image:"Players/Miguel Tendillo.jpg"},
    {name:"Paco Llorente",position:"Forward",country:"Spain",duration:"1987-1994", 
        trophies:"3 La Liga, 2 Copa del Rey, 4 Supercopa de España",image:"Players/Paco Llorente.jpg"},
    {name:"Milan Janković",position:"Midfielder",country:"Yugoslavia",duration:"1987-1988", 
        trophies:"1 La Liga",image:"Players/Milan Janković.jpg"},
    {name:"Bernd Schuster",position:"Midfielder",country:"Germany",duration:"1988-1990", 
        trophies:"2 La Liga, 1 Copa del Rey, 2 Supercopa de España",image:"Players/Bernd Schuster.jpg"},
    {name:"Julen Lopetegui",position:"Goalkeeper",country:"Spain",duration:"1988-1991", 
        trophies:"1 La Liga, 2 Supercopa de España",image:"Players/Julen Lopetegui.jpg"},
    {name:"Fernando Hierro",position:"Defender",country:"Spain",duration:"1989-2003", 
        trophies:"5 La Liga, 1 Copa del Rey, 4 Supercopa de España, 3 UEFA Champions League, 1 UEFA Super Cup, 2 Intercontinental Cup",image:"Players/Fernando Hierro.jpg"},
    {name:"Oscar Ruggeri",position:"Defender",country:"Argentina",duration:"1989-1990", 
        trophies:"1 La Liga, 1 Supercopa de España/ Don Balón Award for Best Foreign Player (1989/90)",image:"Players/Oscar Ruggeri.jpg"},
    {name:"Gheorghe Hagi",position:"Midfielder",country:"Romania",duration:"1990-1992", 
        trophies:"1 Supercopa de España",image:"Players/Gheorghe Hagi.jpg"},
    {name:"Luis Milla",position:"Midfielder",country:"Spain",duration:"1990-1997", 
        trophies:"2 La Liga, 1 Copa del Rey, 2 Supercopa de España",image:"Players/Luis Milla.jpg"},
    {name:"Francisco Villarroya",position:"Defender",country:"Spain",duration:"1990-1994", 
        trophies:"1 Copa del Rey, 2 Supercopa de España, 1 Copa Ibero-American Cup",image:"Players/Francisco Villarroya.jpg"},
    {name:"Alfonso Pérez",position:"Forward",country:"Spain",duration:"1990-1995", 
        trophies:"1 La Liga, 1 Copa del Rey, 2 Supercopa de España",image:"Players/Alfonso Pérez.jpg"},
    {name:"Robert Prosinečki",position:"Midfielder",country:"Croatia",duration:"1991-1994", 
        trophies:"1 Copa del Rey, 1 Supercopa de España, 1 Copa Ibero-American Cup",image:"Players/Robert Prosinečki.jpg"},
    {name:"Luis Enrique",position:"Midfielder",country:"Spain",duration:"1991-1996", 
        trophies:"1 La Liga, 1 Copa del Rey, 1 Supercopa de España, 1 Copa Ibero-American Cup",image:"Players/Luis Enrique.jpg"},
    {name:"Mikel Lasa",position:"Defender",country:"Spain",duration:"1991-1997", 
        trophies:"2 La Liga, 1 Copa del Rey, 1 Supercopa de España",image:"Players/Mikel Lasa.jpg"},
    {name:"Ricardo Rocha",position:"Defender",country:"Brazil",duration:"1991-1993", 
        trophies:"1 Copa del Rey",image:"Players/Ricardo Rocha.jpg"},
    {name:"Iván Zamorano",position:"Forward",country:"Chile",duration:"1992-1996", 
        trophies:"1 La Liga, 1 Copa del Rey, 1 Supercopa de España, 1 Copa Ibero-American Cup/ 1 Pichichi Trophy (1994/95), Don Balón Best Foreign Player Award (1994/95)",image:"Players/Iván Zamorano.jpg"},
    {name:"Peter Dubovský",position:"Forward",country:"Slovakia",duration:"1993-1995", 
        trophies:"1 La Liga, 1 Supercopa de España, 1 Copa Ibero-American Cup",image:"Players/Peter Dubovský.jpg"},
    {name:"Rafael Alkorta",position:"Defender",country:"Spain",duration:"1993-1997", 
        trophies:"2 La Liga, 1 Supercopa de España",image:"Players/Rafael Alkorta.jpg"},
    {name:"Michael Laudrup",position:"Midfielder",country:"Denmark",duration:"1994-1996", 
        trophies:"1 La Liga",image:"Players/Michael Laudrup.jpg"},
    {name:"Fernando Redondo",position:"Midfielder",country:"Argentina",duration:"1994-2000", 
        trophies:"2 La Liga, 2 UEFA Champions League, 1 Intercontinental Cup/ UEFA Club Footballer of the Year (1999-00)",image:"Players/Fernando Redondo.jpg"},
    {name:"José Amavisca",position:"Forward",country:"Spain",duration:"1994-1998", 
        trophies:"2 La Liga, 1 Supercopa de España, 1 UEFA Champions League/ Don Balón Spanish Player of the Year (1994-95)",image:"Players/José Amavisca.jpg"},
    {name:"Santiago Cañizares",position:"Goalkeeper",country:"Spain",duration:"1994-1998", 
        trophies:"2 La Liga, 1 Supercopa de España, 1 UEFA Champions League",image:"Players/Santiago Cañizares.jpg"},
    {name:"Raúl González",position:"Forward",country:"Spain",duration:"1994-2010", 
        trophies:"6 La Liga, 4 Supercopa de España, 3 UEFA Champions League, 1 UEFA Super Cup, 2 Intercontinental Cup/ 2 Pichichi Trophies (1998/99 , 2000/01) 2 UEFA Champions League Top Scorer (1999/00 , 2000/01) Ballon d'Or Runner-up",image:"Players/Raúl González.jpg"},
    {name:"Guti",position:"Midfielder",country:"Spain",duration:"1995-2010", 
        trophies:"5 La Liga, 4 Supercopa de España, 3 UEFA Champions League, 1 UEFA Super Cup, 2 Intercontinental Cup",image:"Players/Guti.jpg"},
    {name:"Álvaro Benito",position:"Midfielder",country:"Spain",duration:"1995-2002", 
        trophies:"1 La Liga, 1 UEFA Champions League",image:"Players/Álvaro Benito.jpg"},
    {name:"Víctor Sánchez",position:"Forward",country:"Spain",duration:"1996-1998", 
        trophies:"1 La Liga, 1 Supercopa de España, 1 UEFA Champions League",image:"Players/Víctor Sánchez.jpg"},
    {name:"Predrag Mijatović",position:"Forward",country:"Yugoslavia",duration:"1996-1999", 
        trophies:"1 La Liga, 1 Supercopa de España, 1 UEFA Champions League, 1 Intercontinental Cup/ Ballon d'Or Runner-up (1997)",image:"Predrag Mijatović.jpg"},
    {name:"Davor Šuker",position:"Forward",country:"Croatia",duration:"1996-1999", 
        trophies:"1 La Liga, 1 Supercopa de España, 1 UEFA Champions League, 1 Intercontinental Cup",image:"Players/Davor Šuker.jpg"},
    {name:"Clarence Seedorf",position:"Midfielder",country:"Netherlands",duration:"1996-1999", 
        trophies:"1 La Liga, 1 Supercopa de España, 1 UEFA Champions League, 1 Intercontinental Cup",image:"Players/Clarence Seedorf.jpg"},
    {name:"Roberto Carlos",position:"Defender",country:"Brazil",duration:"1996-2007", 
        trophies:"4 La Liga, 3 Supercopa de España, 3 UEFA Champions League, 1 UEFA Super Cup, 2 Intercontinental Cup/ UEFA Club Defender of the year (2001/02 , 2002/03)",image:"Players/Roberto Carlos.jpg"},
    {name:"Bodo Illgner",position:"Goalkeeper",country:"Germany",duration:"1996-2001", 
        trophies:"2 La Liga, 1 Supercopa de España, 2 UEFA Champions League, 1 Intercontinental Cup",image:"Players/Bodo Illgner.jpg"},
    {name:"Christian Panucci",position:"Defender",country:"Italy",duration:"1997-1999", 
        trophies:"1 La Liga, 1 Supercopa de España, 1 UEFA Champions League, 1 Intercontinental Cup",image:"Players/Christian Panucci.jpg"},
    {name:"Aitor Karanka",position:"Defender",country:"Spain",duration:"1997-2002", 
        trophies:"1 La Liga, 2 Supercopa de Eapaña, 3 UEFA Champions League",image:"Players/Aitor Karanka.jpg"},
    {name:"Fernando Morientes",position:"Forward",country:"Spain",duration:"1997-2005", 
        trophies:"2 La Liga, 3 Supercopa de España, 3 UEFA Champions League, 1 UEFA Super Cup, 2 Intercontinental Cup",image:"Players/Fernando Morientes.jpg"},
    {name:"Christian Karembeu",position:"Midfielder",country:"France",duration:"1977-2000", 
        trophies:"2 UEFA Champions League, 1 Intercontinental Cup",image:"Players/Christian Karembeu.jpg"},
    {name:"Savio",position:"Forward",country:"Brazil",duration:"1998-2003", 
        trophies:"1 La Liga, 1 Supercopa de España, 3 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Players/Savio.jpg"},
    {name:"Robert Jarni",position:"Defender",country:"Croatia",duration:"1998-1999", 
        trophies:"1 Intercontinental Cup",image:"Players/Robert Jarni.jpg"},
    {name:"Iván Campo",position:"Defender",country:"Spain",duration:"1998-2003", 
        trophies:"1 La Liga, 1 Supercopa de España, 2 UEFA Champions League, 1 Intercontinental Cup",image:"Players/Iván Campo.jpg"},
    {name:"Manuel Canabal",position:"Forward",country:"Spain",duration:"1998-2000", 
        trophies:"1 UEFA Champions League",image:"Players/Manuel Canabal.jpg"},
    {name:"Steve McManaman",position:"Forward",country:"England",duration:"1999-2003", 
        trophies:"2 La Liga, 2 Supercopa de España, 2 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Players/Steve McManaman.jpg"},
    {name:"Michel Salgado",position:"Defender",country:"Spain",duration:"1999-2009", 
        trophies:"4 La Liga, 3 Supercopa de España, 2 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Players/Michel Salgado.jpg"},
    {name:"Iván Helguera",position:"Defender",country:"Spain",duration:"1999-2007", 
        trophies:"3 La Liga, 2 Supercopa de España, 2 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Iván Helguera.jpg"},
    {name:"Nicolas Anelka",position:"Forward",country:"France",duration:"1999-2000", 
        trophies:"1 UEFA Champions League",image:"Players/Nicolas Anelka.jpg"},
    {name:"Iker Casillas",position:"Goalkeeper",country:"Spain",duration:"1999-2015", 
        trophies:"5 La Liga, 2 Copa del Rey, 4 Supercopa de España, 3 UEFA Champions League, 2 UEFA Super Cup, 1 Intercontinental Cup, 1 FIFA Club World Cup/ IFFHS World's Best Goalkeeper (2008 , 2009 , 2010 , 2011 , 2012), Bravo Award (2000)",image:"Players/Iker Casillas.jpg"},
    {name:"Geremi",position:"Midfielder",country:"Cameroon",duration:"1999-2003", 
        trophies:"1 La Liga, 1 Supercopa de España, 2 UEFA Champions League",image:"Players/Geremi.jpg"},
    {name:"Flávio Conceição",position:"Midfielder",country:"Brazil",duration:"2000-2004", 
        trophies:"2 La Liga, 1 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup",image:"Players/Flávio Conceição.jpg"},
    {name:"Claude Makélélé",position:"Midfielder",country:"France",duration:"2000-2003", 
        trophies:"2 La Liga, 2 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Players/Claude Makélélé.jpg"},
    {name:"Albert Celades",position:"Midfielder",country:"Spain",duration:"2000-2005",
        trophies:"2 La Liga, 1 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup",image:"Players/Albert Celades.jpg"},
    {name:"César Sánchez",position:"Goalkeeper",country:"Spain",duration:"2000-2005", 
        trophies:"2 La Liga, 2 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Players/César Sánchez.jpg"},
    {name:"Luís Figo",position:"Forward",country:"Portugal",duration:"2000-2005", 
        trophies:"2 La Liga, 2 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup/ Ballon d'Or (2000), FIFA World Player of the Year (2001), Don Balón Best Foreign Player Award (2000/01)",image:"Players/Luís Figo.jpg"},
    {name:"Zinedine Zidane",position:"Midfielder",country:"France",duration:"2001-2006", 
        trophies:"1 La Liga, 2 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup/ FIFA World Player of the Year (2003), URFA Club Footballer of the Year (2001/02)",image:"Players/Zinedine Zidane.jpg"},
    {name:"Francisco Pavón",position:"Defender",country:"Spain",duration:"2001-2007", 
        trophies:"2 La Liga, 1 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Players/Francisco Pavón.jpg"},
    {name:"Raúl Bravo",position:"Defender",country:"Spain",duration:"2001-2007", 
        trophies:"2 La Liga, 1 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Players/Raúl Bravo.jpg"},
    {name:"Ronaldo Nazário",position:"Forward",country:"Brazil",duration:"2002-2007", 
        trophies:"2 La Liga, 1 Supercopa de España, 1 Intercontinental Cup, 1 Pichichi Trophy (2003/04), FIFA World Player of the Year (2002)",image:"Players/Ronaldo Nazário.jpg"},
    {name:"Esteban Cambiasso",position:"Midfielder",country:"Argentina",duration:"2002-2004", 
        trophies:"1 La Liga, 1 Supercopa de España, 1 UEFA Super Cup, 1 Intercontinental Cup",image:"Players/Esteban Cambiasso.jpg"},
    {name:"David Beckham",position:"Midfielder",country:"England",duration:"2003-2007", 
        trophies:"1 La Liga, 1 Supercopa de Eapaña",image:"Players/David Beckham.jpg"},
    {name:"Álvaro Arbeloa",position:"Defender",country:"Spain",duration:"2004-2005 2009-2016", 
        trophies:"1 La Liga, 2 Copa del Rey, 1 Supercopa de España, 2 UEFA Champions League, 1 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Álvaro Arbeloa.jpg"},
    {name:"Michael Owen",position:"Forward",country:"England",duration:"2004-2005", 
        trophies:"None",image:"Players/Michael Owen.jpg"},
    {name:"Walter Samuel",position:"Defender",country:"Argentina",duration:"2004-2005", 
        trophies:"None",image:"Players/Walter Samuel.jpg"},
    {name:"Jonathan Woodgate",position:"Defender",country:"England",duration:"2004-2007", 
        trophies:"1 La Liga",image:"Players/Jonathan Woodgate.jpg"},
    {name:"Diego López",position:"Goalkeeper",country:"Spain",duration:"2005-2007 2013-2014", 
        trophies:"1 La Liga, 1 Copa del Rey, 1 UEFA Champions League",image:"Players/Diego López.jpg"},
    {name:"Robinho",position:"Forward",country:"Brazil",duration:"2005-2008", 
        trophies:"2 La Liga, 1 Supercopa de España",image:"Players/Robinho.jpg"},
    {name:"Sergio Ramos",position:"Defender",country:"Spain",duration:"2005-2021", 
        trophies:"5 La Liga, 2 Copa del Rey, 4 Supercopa de España, 4 UEFA Champions League, 3 UEFA Super Cup, 4 FIFA Club World Cup/ UEFA Club Defender of the Year (2016/17 , 2017/18)",image:"Players/Sergio Ramos.jpg"},
    {name:"Julio Baptista",position:"Forward",country:"Brazil",duration:"2005-2008", 
        trophies:"1 La Liga",image:"Players/Julio Baptista.jpg"},
    {name:"Fabio Cannavaro",position:"Defender",country:"Italy",duration:"2006-2009", 
        trophies:"2 La Liga, 1 Supercopa de España/ Ballon d'Or (2006), FIFA World Player of the Year(2006)",image:"Players/Fabio Cannavaro.jpg"},
    {name:"Ruud van Nistelrooy",position:"Forward",country:"Netherlands",duration:"2006-2010", 
        trophies:"2 La Liga, 1 Supercopa de España/ 1 Pichichi Trophy (2006/07)",image:"Players/Ruud van Nistelrooy.jpg"},
    {name:"Mahamadou Diarra",position:"Midfielder",country:"Mali",duration:"2006-2011", 
        trophies:"2 La Liga, 1 Copa del Rey, 1 Supercopa de España",image:"Players/Mahamadou Diarra.jpg"},
    {name:"José Antonio Reyes",position:"Forward",country:"Spain",duration:"2006-2007", 
        trophies:"1 La Liga",image:"Players/José Antonio Reyes.jpg"},
    {name:"Gonzalo Higuaín",position:"Forward",country:"Argentina",duration:"2007-2013", 
        trophies:"3 La Liga, 1 Copa del Rey, 2 Supercopa de España",image:"Players/Gonzalo Higuaín.jpg"},
    {name:"Marcelo",position:"Defender",country:"Brazil",duration:"2007-2022", 
        trophies:"6 La Liga, 2 Copa del Rey, 5 Supercopa de España, 5 UEFA Champions League, 3 UEFA Super Cup, 4 FIFA Club World Cup",image:"Players/Marcelo.jpg"},
    {name:"Fernando Gago",position:"Midfielder",country:"Argentina",duration:"2007-2012", 
        trophies:"2 La Liga, 1 Copa del Rey, 1 Supercopa de España",image:"Players/Fernando Gago.jpg"},
    {name:"Pepe",position:"Defender",country:"Portugal",duration:"2007-2017", 
        trophies:"3 La Liga, 2 Copa del Rey, 2 Supercopa de España, 3 UEFA Champions League, 1 UEFA Super Cup, 2 FIFA Club World Cup",image:"Players/Pepe.jpg"},
    {name:"Arjen Robben",position:"Forward",country:"Netherlands",duration:"2007-2009", 
        trophies:"1 La Liga, 1 Supercopa de España",image:"Players/Arjen Robben.jpg"},
    {name:"Wesley Sneijder",position:"Midfielder",country:"Netherlands",duration:"2007-2009", 
        trophies:"1 La Liga, 1 Supercopa de España",image:"Players/Wesley Sneijder.jpg"},
    {name:"Gabriel Heinze",position:"Defender",country:"Argentina",duration:"2007-2009", 
        trophies:"1 La Liga, 1 Supercopa de España",image:"Players/Gabriel Heinze.jpg"},
    {name:"Royston Drenthe",position:"Defender",country:"Netherlands",duration:"2007-2012", 
        trophies:"1 La Liga, 1 Supercopa de España",image:"Players/Royston Drenthe.jpg"},
    {name:"Rafael van der Vaart",position:"Midfielder",country:"Netherlands",duration:"2008-2010", 
        trophies:"1 Supercopa de España",image:"Players/Rafael van der Vaart.jpg"},
    {name:"Javi García",position:"Midfielder",country:"Spain",duration:"2008-2009", 
        trophies:"1 Supercopa de España",image:"Players/Javi García.jpg"},
    {name:"Cristiano Ronaldo",position:"Forward",country:"Portugal",duration:"2009-2018", 
        trophies:"2 La Liga, 2 Copa del Rey, 2 Supercopa de España, 4 UEFA Champion League, 2 UEFA Super Cup, 3 FIFA Club World Cup/ 4 Ballon d'Or (2013 , 2014 , 2016 , 2017), 3 Pichichi Trophies, 3 European Golden Shoe, 3 UEFA Men's Player of the Year",image:"Players/Cristiano Ronaldo.jpg"},
    {name:"Kaká",position:"Midfielder",country:"Brazil",duration:"2009-2013", 
        trophies:"1 La Liga, 1 Copa del Rey, 1 Supercopa de España",image:"Players/Kaká.jpg"},
    {name:"Karim Benzema",position:"Forward",country:"France",duration:"2009-2023", 
        trophies:"4 La Liga, 3 Copa del Rey, 4 Supercopa de España, 5 UEFA Champions League, 4 UEFA Super Cup, 5 FIFA Club World Cup/ Ballon d'Or (2022), UEFA Men's Player of the Year (2021/22), 1 Pichichi Trophy",image:"Players/Karim Benzema.jpg"},
    {name:"Xabi Alonso",position:"Midfielder",country:"Spain",duration:"2009-2014", 
        trophies:"1 La Liga, 2 Copa del Rey, 1 Supercopa de España, 1 UEFA Champions League",image:"Players/Xabi Alonso.jpg"},
    {name:"Raúl Albio",position:"Defender",country:"Spain",duration:"2009-2013", 
        trophies:"1 La Liga, 1 Copa del Rey, 1 Supercopa de España",image:"Players/Raúl Albio.jpg"},
    {name:"Esteban Granero",position:"Midfielder",country:"Spain",duration:"2009-2012", 
        trophies:"1 La Liga, 1 Copa del Rey, 1 Supercopa de Epaña",image:"Players/Esteban Granero.jpg"},
    {name:"Angel Di María",position:"Forward",country:"Argentina",duration:"2010-2014", 
        trophies:"1 La Liga, 2 Copa del Rey, 1 Supercopa de Eapaña, 1 UEFA Champions Legue, 1 UEFA Super Cup",image:"Players/Angel Di María.jpg"},
    {name:"Mesut Özil",position:"Midfielder",country:"Germany",duration:"2010-2013", 
        trophies:"1 La Liga, 1 Copa del Rey, 1 Supercopa de España",image:"Players/Mesut Özil.jpg"},
    {name:"Sami Khedira",position:"Midfielder",country:"Germany",duration:"2010-2015", 
        trophies:"1 La Liga, 2 Copa del Rey, 1 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Sami Khedira.jpg"},
    {name:"Ricardo Carvalho",position:"Defender",country:"Portugal",duration:"2010-2013", 
        trophies:"1 La Liga, 1 Copa del Rey, 1 Supercopa de España",image:"Players/Ricardo Carvalho.jpg"},
    {name:"Alvaro Morata",position:"Forward",country:"Spain",duration:"2010-2014 2016-2017", 
        trophies:"2 La Liga, 2 Copa del Rey, 1 Supercopa de España, 2 UEFA Champions League, 1 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Alvaro Morata.jpg"},
    {name:"Raphaël Varane",position:"Defender",country:"France",duration:"2011-2021", 
        trophies:"3 La Liga, 1 Copa del Rey, 3 Supercopa de España, 4 UEFA Champions League, 3 UEFA Super Cup, 4 FIFA Club World Cup",image:"Players/Raphaël Varane.jpg"},
    {name:"Fábio Coentrão",position:"Defender",country:"Portugal",duration:"2011-2018", 
        trophies:"2 La Liga, 1 Copa del Rey, 1 Supercopa de España, 2 UEFA Champions League, 1 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Fábio Coentrão.jpg"},
    {name:"José Callejón",position:"Forward",country:"Spain",duration:"2011-2013", 
        trophies:"1 La Liga, 1 Supercopa de España",image:"Players/José Callejón.jpg"},
    {name:"Luka Modrić",position:"Midfielder",country:"Croatia",duration:"2012-2025", 
        trophies:"4 La Liga, 2 Copa del Rey, 5 Supercopa de España, 6 UEFA Champions League, 5 UEFA Super Cup, 5 FIFA Club World Cup/ Ballon d'Or (2018), FIFA World Player of the Year (2018), UEFA Men's Player of the Year (2017/18)",image:"Players/Luka Modrić.jpg"},
    {name:"Nacho",position:"Defender",country:"Spain",duration:"2012-2024", 
        trophies:"4 La Liga, 2 Copa del Rey, 5 Supercopa de Eapaña, 6 UEFA Champions League, 4 UEFA Super Cup, 5 FIFA Club World Cup",image:"Players/Nacho.jpg"},
    {name:"Casemiro",position:"Midfielder",country:"Brazil",duration:"2013-2022", 
        trophies:"3 La Liga, 1 Copa del Rey, 3 Supercopa de España, 5 UEFA Champions League, 3 UEFA Super Cup, 3 FIFA Club World Cup",image:"Players/Casemiro.jpg"},
    {name:"Gareth Bale",position:"Forward",country:"Wales",duration:"2013-2022", 
        trophies:"3 La Liga, 1 Copa del Rey, 3 Supercopa de España, 5 UEFA Champions League, 3 UEFA Super Cup, 4 FIFA Club World Cup",image:"Players/Gareth Bale.jpg"},
    {name:"Dani Carvajal",position:"Defender",country:"Spain",duration:"2013-Present", 
        trophies:"4 La Liga, 2 Copa del Rey, 5 Supercopa de Eapaña, 6 UEFA Champions League, 5 UEFA Super Cup, 5 FIFA Club World Cup",image:"Players/Dani Carvajal.jpg"},
    {name:"Isco",position:"Midfielder",country:"Spain",duration:"2013-2022", 
        trophies:"3 La Liga, 1 Copa del Rey, 3 Supercopa de España, 5 UEFA Champions League, 3 UEFA Super Cup, 4 FIFA Club World Cup",image:"Players/Isco.jpg"},
    {name:"Asier Illarramendi",position:"Midfielder",country:"Spain",duration:"2013-2015", 
        trophies:"1 Copa del Rey, 1 UEFA Champions League, 1 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Asier Illarramendi.jpg"},
    {name:"Toni Kroos",position:"Midfielder",country:"Germany",duration:"2014-2024", 
        trophies:"4 La Liga, 1 Copa del Rey, 4 Supercopa de España, 5 UEFA Champions League, 4 UEFA Super Cup, 5 FIFA Club World Cup",image:"Players/Toni Kroos.jpg"},
    {name:"James Rodríguez",position:"Midfielder",country:"Colombia",duration:"2014-2020", 
        trophies:"2 La Liga, 1 Supercopa de España, 2 UEFA Champions League, 2 UEFA Super Cup, 2 FIFA Club World Cup",image:"Players/James Rodríguez.jpg"},
    {name:"Keylor Navas",position:"Goalkeeper",country:"Costa Rica",duration:"2014-2019", 
        trophies:"1 La Liga, 1 Supercopa de España, 3 UEFA Champions League, 2 UEFA Super Cup, 4 FIFA Club World Cup/ UEFA Champions League Goalkeeper of the Season (2017/18)",image:"Players/Keylor Navas.jpg"},
    {name:"Lucas Vázquez",position:"Defender",country:"Spain",duration:"2015-2025", 
        trophies:"4 La Liga, 1 Copa del Rey, 4 Supercopa de España, 5 UEFA Champions League, 3 UEFA Super Cup, 4 FIFA Club World Cup",image:"Players/Lucas Vázquez.jpg"},
    {name:"Mateo Kovačić",position:"Midfielder",country:"Croatia",duration:"2015-2018", 
        trophies:"1 La Liga, 1 Supercopa de España, 3 UEFA Champions League, 2 UEFA Super Cup, 2 FIFA Club World Cup",image:"Players/Mateo Kovačić.jpg"},
    {name:"Danillo",position:"Defender",country:"Brazil",duration:"2015-2017", 
        trophies:"1 La Liga, 2 UEFA Champions League, 1 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Danillo.jpg"},
    {name:"Marco Asensio",position:"Forward",country:"Spain",duration:"2016-2023", 
        trophies:"3 La Liga, 1 Copa del Rey, 3 Supercopa de España, 3 UEFA Champions League, 3 UEFA Super Cup, 4 FIFA Club World Cup",image:"Players/Marco Asensio.jpg"},
    {name:"Federico Valverde",position:"Midfielder",country:"Uruguay",duration:"2018-Present", 
        trophies:"3 La Liga, 1 Copa del Rey, 4 Supercopa de España, 2 UEFA Champions League, 3 UEFA Super Cup, 2 FIFA Club World Cup",image:"Players/Federico Valverde.jpg"},
    {name:"Thibaut Courtois",position:"Goalkeeper",country:"Belgium",duration:"2018-Present", 
        trophies:"3 La Liga, 1 Copa del Rey, 3 Supercopa de España, 2 UEFA Champions League, 2 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Thibaut Courtois.jpg"},
    {name:"Andriy Lunin",position:"Goalkeeper",country:"Ukraine",duration:"2018-Present", 
        trophies:"2 La Liga, 1 Copa del Rey, 2 Supercopa de España, 2 UEFA Champions League, 2 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Andriy Lunin.jpg"},
    {name:"Vinícis Júnior",position:"Forward",country:"Brazil",duration:"2018-Present", 
        trophies:"3 La Liga, 1 Copa del Rey, 4 Supercopa de España, 2 UEFA Champions League, 3 UEFA Super Cup, 2 FIFA Club World Cup",image:"Players/Vinícius Júnior.jpg"},
    {name:"Éder Militão",position:"Defender",country:"Brazil",duration:"2019-Present", 
        trophies:"3 La Liga, 1 Copa del Rey, 3 Supercopa de España, 2 UEFA Champions League, 2 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Éder Militão.jpg"},
    {name:"Ferland Mendy",position:"Defender",country:"France",duration:"2019-Present", 
        trophies:"3 La Liga, 1 Copa del Rey, 4 Supercopa de España, 2 UEFA Champions League, 3 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Ferland Mendy.jpg"},
    {name:"Rodrygo",position:"Forward",country:"Brazil",duration:"2019-Present", 
        trophies:"3 La Liga, 1 Copa del Rey, 4 Supercopa de España, 2 UEFA Champions League, 3 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Rodrygo.jpg"},
    {name:"Eden Hazard",position:"Forward",country:"Belgium",duration:"2019-2023", 
        trophies:"2 La Liga, 1 Copa del Rey, 1 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup",image:"Players/Eden Hazard.jpg"},
    {name:"Luka Jović",position:"Forward",country:"Serbia",duration:"2019-2022", 
        trophies:"2 La Liga, 2 Supercopa de España, 1 UEFA Champions League",image:"Players/Luka Jović.jpg"},
    {name:"Brahim Díaz",position:"Forward",country:"Morocco",duration:"2019-Present", 
        trophies:"2 La Liga, 2 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup",image:"Players/Brahim Díaz.jpg"},
    {name:"Alphonse Areola",position:"Goalkeeper",country:"France",duration:"2019-2020", 
        trophies:"1 La Liga, 1 Supercopa de España",image:"Players/Alphonse Areola.jpg"},
    {name:"David Alaba",position:"Defender",country:"Austria",duration:"2021-Present", 
        trophies:"2 La Liga, 1 Copa del Rey, 2 Supercopa de España, 2 UEFA Champions League, 2 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/David Alaba.jpg"},
    {name:"Eduardo Camavinga",position:"Midfielder",country:"France",duration:"2021-Present", 
        trophies:"2 La Liga, 1 Copa del Rey, 2 Supercopa de España, 2 UEFA Champions League, 2 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Eduardo Camavinga.jpg"},
    {name:"Antonio Rüdiger",position:"Defender",country:"Germany",duration:"2022-Present", 
        trophies:"1 La Liga, 1 Copa del Rey, 2 Supercopa de España, 1 UEFA Champions League, 2 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Antonio Rüdiger.jpg"},
    {name:"Aurélien Tchouaméni",position:"Midfielder",country:"France",duration:"2022-Present", 
        trophies:"1 La Liga, 1 Copa del Rey, 2 Supercopa de España, 1 UEFA Champions League, 2 UEFA Super Cup, 1 FIFA Club World Cup",image:"Players/Aurélien Tchouaméni.jpg"},
    {name:"Jude Bellingham",position:"Midfielder",country:"England",duration:"2023-Present", 
        trophies:"1 La Liga, 2 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup/ La Liga Player of the Season (2023/24), Kopa Trophy (2023)",image:"Players/Jude Bellingham.jpg"},
    {name:"Kepa Arrizabalaga",position:"Goalkeeper",country:"Spain",duration:"2023-2024", 
        trophies:"1 UEFA Champions League, 1 La Liga, 1 Supercopa de España",image:"Players/Kepa Arrizabalaga.jpg"},
    {name:"Fran García",position:"Defender",country:"Spain",duration:"2023-Present", 
        trophies:"1 La Liga, 2 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup",image:"Players/Fran García.jpg"},
    {name:"Arda Güler",position:"Midfielder",country:"Türkiye",duration:"2023-Present", 
        trophies:"1 La Liga, 2 Supercopa de España, 1 UEFA Champions League, 1 UEFA Super Cup",image:"Players/Arda Güler.jpg"},
    {name:"Kylian Mbappé",position:"Forward",country:"France",duration:"2024-Present", 
        trophies:"1 UEFA Super Cup, 1 FIFA Intercontinental Cup/ Champions League Golden Boot (2025/26)",image:"Players/Kylian Mbappé.jpg"},
    {name:"Endrick",position:"Forward",country:"Brazil",duration:"2024-Present", 
        trophies:"1 UEFA Super Cup, 1 FIFA Intercontinental Cup",image:"Players/Endrick.jpg"},
    {name:"Trent Alexander-Arnold",position:"Defender",country:"England",duration:"2025-Present", 
        trophies:"None",image:"Players/Trent Alexander-Arnold.jpg"},
    {name:"Dean Huijsen",position:"Defender",country:"Spain",duration:"2025-Present", 
        trophies:"None",image:"Players/Dean Huijsen.jpg"},
    {name:"Álvaro Carreras",position:"Defender",country:"Spain",duration:"2025-Present", 
        trophies:"None",image:"Players/Álvaro Carreras.jpg"},
    ];

const container = document.getElementById('playersContainer');
const searchInput = document.getElementById("searchInput");
const positionFilter = document.getElementById("positionFilter");
const countryFilter = document.getElementById("countryFilter");
const sortFilter = document.getElementById("sortFilter");

function renderPlayers(list) {
    const container = document.getElementById('playersContainer');
    if (!container) return;
    container.innerHTML = "";
    list.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.onclick = () => showPlayer(player.name);
        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}" onerror="this.onerror=null; this.src='Real Madrid Logo.png';">
            <h3>${player.name}</h3>
            <p><strong>Position:</strong> ${player.position}</p>
            <p><strong>Country:</strong> ${player.country}</p>
            <p><strong>Duration:</strong> ${player.duration}</p>
        `;
        container.appendChild(card);
    });
}

function filterPlayers() {
    const searchInput = document.getElementById("searchInput");
    const positionFilter = document.getElementById("positionFilter");
    const countryFilter = document.getElementById("countryFilter");
    const sortFilter = document.getElementById("sortFilter");
    const searchValue = searchInput ? searchInput.value.toLowerCase() : "";
    const selectedPosition = positionFilter ? positionFilter.value : "All";
    const selectedCountry = countryFilter ? countryFilter.value : "All";
    const selectedSort = sortFilter ? sortFilter.value : "Default";

    let filtered = players.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchValue);
        const matchesPosition = selectedPosition === "All" || p.position === selectedPosition;
        const matchesCountry = selectedCountry === "All" || p.country === selectedCountry;
        return matchesSearch && matchesPosition && matchesCountry;
    });

    if (selectedSort === "Latest") {
        filtered = [...filtered].reverse();
    }
    
    renderPlayers(filtered);
}
function showPlayer(name) {
    const p = players.find(player => player.name === name);
    if(p) {
        const modalImage = document.getElementById("modalImage");
        modalImage.onerror = function() {
            this.onerror = null;
            this.src = "Real Madrid Logo.png";
        };
        modalImage.src = p.image;
        document.getElementById("modalName").textContent = p.name;
        document.getElementById("modalPosition").textContent = "Position: " + p.position;
        document.getElementById("modalCountry").textContent = "Country: " + p.country;
        document.getElementById("modalDuration").textContent = "Duration: " + p.duration;
        document.getElementById("modalTrophies").textContent = "Awards: " + p.trophies;
        document.getElementById("playerModal").style.display = "flex";
    }
}

function closePlayer() {
    document.getElementById("playerModal").style.display = "none";
}

const managers = [
    {name:"Arthur Johnson",country:"Ireland",duration:"1910-1920",trophies:"1 Copa del Rey",image:"Managers/Arthur Johnson.jpg"},
    {name:"Juan de Cárcer",country:"Spain",duration:"1920-1926",trophies:"None",image:"Managers/Juan de Cárcer.jpg"},
    {name:"Pedro Llorente",country:"Spain",duration:"1926-1927",trophies:"None",image:"Managers/Pedro Llorente.jpg"},
    {name:"Santiago Bernabéu",country:"Spain",duration:"1926-1927",trophies:"None",image:"Managers/Santiago Bernabéu.jpg"},
    {name:"José Berraondo",country:"Spain",duration:"1927-1929",trophies:"None",image:"Managers/José Beraondo.jpg"},
    {name:"José Quirante",country:"Spain",duration:"1929-1930",trophies:"None",image:"Managers/José Quirante.jpg"},
    {name:"Lippo Hertzka",country:"Hungary",duration:"1930-1932",trophies:"1 La Liga",image:"Managers/Lippo Hertzka.jpg"},
    {name:"Robert Firth",country:"England",duration:"1932-1934",trophies:"1 La Liga",image:"Managers/Robert Firth.jpg"},
    {name:"Francisco Bru",country:"Spain",duration:"1934-1941",trophies:"2 Copa del Rey",image:"Players/Francisco Bru.jpg"},
    {name:"Juan Armet",country:"Spain",duration:"1941-1943",trophies:"None",image:"Managers/Juan Armet.jpg"},
    {name:"Ramón Encinas",country:"Spain",duration:"1943-1945",trophies:"None",image:"Managers/Ramón Encinas.jpg"},
    {name:"Jacinto Quincoces",country:"Spain",duration:"1945-1946",trophies:"1 Copa del Rey",image:"Managers/Jacinto Quincoces.jpg"},
    {name:"Baltasar Albéniz",country:"Spain",duration:"1946-1947",trophies:"1 Copa del Rey",image:"Managers/Baltasar.jpg"},
    {name:"Michael Keeping",country:"England",duration:"1948-1950",trophies:"1 Copa Eva Duarte",image:"Managers/Michael Keeping.jpg"},
    {name:"Héctor Scarone",country:"Uruguay",duration:"1951-1952",trophies:"None",image:"Managers/Héctor Scarone.jpg"},
    {name:"Juan Antonio Ipiña",country:"Spain",duration:"1952-1953",trophies:"None",image:"Managers/Juan Antonio Ipiña.jpg"},
    {name:"Enrique Fernández",country:"Uruguay",duration:"1953-1954",trophies:"1 La Liga",image:"Managers/Enrique Fernández.jpg"},
    {name:"José Villalonga",country:"Spain",duration:"1954-1957",trophies:"2 La Liga, 2 European Cup",image:"Managers/José Villalonga.jpg"},
    {name:"Luis Carniglia",country:"Argentina",duration:"1957-1959",trophies:"1 La Liga, 2 European Cup",image:"Managers/Luis Carniglia.jpg"},
    {name:"Manuel Fleitas",country:"Paraguay",duration:"1959-1960",trophies:"None",image:"Managers/Manuel Fleitas.jpg"},
    {name:"Miguel Muñoz",country:"Spain",duration:"1960-1974",trophies:"9 La Liga, 2 Copa del Rey, 2 European Cup, 1 Intercontinental Cup",image:"Managers/Miguel Muñoz.jpg"},
    {name:"Luis Molowny",country:"Spain",duration:"1974",trophies:"1 Copa del Rey",image:"Managers/Luis Molowny.jpg"},
    {name:"Miljan Miljanić",country:"Yugoslavia",duration:"1974-1977",trophies:"2 La Liga, 1 Copa del Rey",image:"Managers/Miljan Miljanić.jpg"},
    {name:"Vujadin Boškov",country:"Yugoslavia",duration:"1979-1982",trophies:"1 La Liga, 1 Copa del Rey",image:"Managers/Vujadin Boškov.jpg"},
    {name:"Alfredo Di Stéfano",country:"Argentina",duration:"1982-1984",trophies:"None",image:"Managers/Alfredo Di Stéfano.jpg"},
    {name:"Amancio Amaro",country:"Spain",duration:"1984-1985",trophies:"None",image:"Managers/Amancio Amaro.jpg"},
    {name:"Luis Molowny (2nd)",country:"Spain",duration:"1985-1986",trophies:"1 La Liga, 1 Copa de la Liga, 2 UEFA Cups",image:"Managers/Luis Molowny.jpg"},
    {name:"Leo Beenhakker",country:"Netherlands",duration:"1986-1989",trophies:"3 La Liga, 1 Copa del Rey, 2 Supercopa",image:"Managers/Leo.Beenhakker.jpg"},
    {name:"John Toshack",country:"Wales",duration:"1989-1990",trophies:"1 La Liga",image:"Managers/John Toshack.jpg"},
    {name:"Radomir Antić",country:"Serbia",duration:"1991-1992",trophies:"None",image:"Managers/Radomir Antić.jpg"},
    {name:"Benito Floro",country:"Spain",duration:"1992-1994",trophies:"1 Copa del Rey, 1 Supercopa",image:"Managers/Benito Floro.jpg"},
    {name:"Vicente del Bosque",country:"Spain",duration:"1994/1996",trophies:"None",image:"Managers/Vicente del Bosque.jpg"},
    {name:"Jorge Valdano",country:"Argentina",duration:"1994-1996",trophies:"1 La Liga",image:"Managers/Jorge Valdano.jpg"},
    {name:"Fabio Capello",country:"Italy",duration:"1996-1997",trophies:"1 La Liga",image:"Managers/Fabio Capello.jpg"},
    {name:"Jupp Heynckes",country:"Germany",duration:"1997-1998",trophies:"1 Champions League, 1 Supercopa",image:"Managers/Jupp Heynckes.jpg"},
    {name:"Guus Hiddink",country:"Netherlands",duration:"1998-1999",trophies:"1 Intercontinental Cup",image:"Managers/Guus Hiddink.jpg"},
    {name:"John Toshack (2nd)",country:"Wales",duration:"1999",trophies:"None",image:"Managers/John Toshack.jpg"},
    {name:"Vicente del Bosque (2nd)",country:"Spain",duration:"1999-2003",trophies:"2 La Liga, 2 Champions League, 1 Intercontinental Cup, 1 UEFA Super Cup",image:"Managers/Vicente del Bosque.jpg"},
    {name:"Carlos Queiroz",country:"Portugal",duration:"2003-2004",trophies:"1 Supercopa",image:"Managers/Carlos Queiroz.jpg"},
    {name:"Vanderlei Luxemburgo",country:"Brazil",duration:"2004-2005",trophies:"None",image:"Managers/Vanderlei Luxemburgo.jpg"},
    {name:"Fabio Capello (2nd)",country:"Italy",duration:"2006-2007",trophies:"1 La Liga",image:"Managers/Fabio Capello.jpg"},
    {name:"Bernd Shuster",country:"Germany",duration:"2007-2008",trophies:"1 La Liga, 1 Supercopa",image:"Managers/Fabio Capello.jpg"},
    {name:"Juande Ramos",country:"Spain",duration:"2008-2009",trophies:"None",image:"Managers/Juande Ramos.jpg"},
    {name:"Manuel Pellegrini",country:"Chile",duration:"2009-2010",trophies:"None",image:"Managers/Manuel Pellegrini.jpg"},
    {name:"José Mourinho",country:"Portugal",duration:"2010-2013",trophies:"1 La Liga, 1 Copa del Rey, 1 Supercopa",image:"Managers/José Mourinho.jpg"},
    {name:"Carlo Ancelotti",country:"Italy",duration:"2013-2015",trophies:"1 Champions League, 1 Copa del Rey, 1 UEFA Super Cup, 1 FIFA Club World Cup",image:"Managers/Carlo Ancelotti.jpg"},
    {name:"Rafael Benítez",country:"Spain",duration:"2015-2016",trophies:"None",image:"Managers/Rafael Benítez.jpg"},
    {name:"Zinedine Zidane",country:"France",duration:"2016-2018",trophies:"1 La Liga, 3 Champions League, 2 FIFA Club World Cup, 2 UEFA Super Cup, 1 Supercopa",image:"Managers/Zinedine Zidane.jpg"},
    {name:"Julen Lopetegui",country:"Spain",duration:"2018",trophies:"None",image:"Managers/Julen Lopetegui.jpg"},
    {name:"Santiago Solari",country:"Argentina",duration:"2018-2019",trophies:"1 FIFA Club World Cup",image:"Managers/Santiago Solari.jpg"},
    {name:"Zinedine Zidane (2nd)",country:"France",duration:"2019-2021",trophies:"1 La Liga, 1 Supercopa",image:"Managers/Zinedine Zidane.jpg"},
    {name:"Carlo Ancelotti",country:"Italy",duration:"2021-2025",trophies:"2 La Liga, 2 Champions League, 1 Copa del Rey, 2 Supercopa, 2 UEFA Super Cup, 1 FIFA Club World Cup",image:"Managers/Carlo Ancelotti.jpg"},
    {name:"Xabi Alonso",country:"Spain",duration:"2025-2026",trophies:"None",image:"Managers/Xabi Alonso.jpg"},
    {name:"Alvaro Arbeloa",country:"Spain",duration:"2026-Present",trophies:"None",image:"Managers/Alvaro Arbeloa.jpg"},
];
function renderList(list, containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    list.forEach(item => {
        const card = document.createElement('div');
        card.className = type === 'manager' ? 'manager-card' : 'player-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='Real Madrid Logo.png';">
            <h3>${item.name}</h3>
            <p>${item.duration}</p>
        `;
        card.onclick = () => {
            if (type === 'manager') {
                showManagerModal(item.name);
            } else {
                showPlayer(item.name);
            }
        };
        container.appendChild(card);
    });
}

function showManagerModal(name) {
    const m = managers.find(manager => manager.name === name);
    if (m) {
        const modalImg = document.getElementById("modalImage");
        const modalName = document.getElementById("modalName");
        
        if(modalImg && modalName) {
            modalImg.onerror = function() {
                this.onerror = null;
                this.src = "Real Madrid Logo.png";
            };
            modalImg.src = m.image;
            modalName.textContent = m.name;
            document.getElementById("modalPosition").textContent = "Role: Manager";
            document.getElementById("modalCountry").textContent = "Nationality: " + m.country;
            document.getElementById("modalDuration").textContent = "Tenure: " + m.duration;
            document.getElementById("modalTrophies").textContent = "Honors: " + m.trophies;
            document.getElementById("playerModal").style.display = "flex";
        }
    }
}

function filterManagers() {
    const mSearchInput = document.getElementById("managerSearchInput");
    const mCountryFilter = document.getElementById("managerCountryFilter");
    const mSortFilter = document.getElementById("managerSortFilter");

    const searchValue = mSearchInput ? mSearchInput.value.toLowerCase() : "";
    const selectedCountry = mCountryFilter ? mCountryFilter.value : "All";
    const selectedSort = mSortFilter ? mSortFilter.value : "Default";

    let filtered = managers.filter(m => {
        const matchesSearch = m.name.toLowerCase().includes(searchValue);
        const matchesCountry = selectedCountry === "All" || m.country === selectedCountry;
        return matchesSearch && matchesCountry;
    });

    if (selectedSort === "Latest") {
        filtered = [...filtered].reverse();
    }
    
    renderList(filtered, 'managersContainer', 'manager');
}

renderList(managers, 'managersContainer', 'manager');

const managerSearchInput = document.getElementById("managerSearchInput");
const managerSortFilter = document.getElementById("managerSortFilter");

if (managerSearchInput) managerSearchInput.onkeyup = filterManagers;
if (managerSortFilter) managerSortFilter.onchange = filterManagers;

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIdx = 0;

function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = ''; 
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.onclick = (e) => { e.stopPropagation(); updateGallery(i); };
        dotsContainer.appendChild(dot);
    });
}

function updateGallery(index) {
    if (index >= slides.length) currentIdx = 0;
    else if (index < 0) currentIdx = slides.length - 1;
    else currentIdx = index;

    slides.forEach((s, i) => s.classList.toggle('active', i === currentIdx));
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentIdx));
}

nextBtn.onclick = (e) => { e.stopPropagation(); updateGallery(currentIdx + 1); };
prevBtn.onclick = (e) => { e.stopPropagation(); updateGallery(currentIdx - 1); };

const stadiumCard = document.getElementById('stadiumCardInfo');
const panelOverlay = document.getElementById('stadiumPanelOverlay');
const closePanelBtn = document.getElementById('closePanelBtn');

stadiumCard.onclick = () => {
    panelOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

closePanelBtn.onclick = () => {
    panelOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

panelOverlay.onclick = (e) => {
    if(e.target === panelOverlay) closePanelBtn.click();
};

const trophyDetails = {
    "Champions League": { name: "UEFA Champions League", img: "trophies/15 champions league.jpg", desc: "Real Madrid is the undisputed king of European football, holding a record-breaking 15 UEFA Champions League titles. They established their legacy by winning the first five editions of the tournament consecutively and have continued to dominate across every era of the sport. Their historic winning years are: 1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, and 2024. This incredible collection of trophies, spanning nearly 70 years, cements their status as the most successful and decorated club in the history of the competition." },
    "FIFA ClubWorld Cup": { name: "FIFA Club World Cup", img: "trophies/5 FIFA Club World Cup.jpg", desc: "Real Madrid is the **undisputed king of global football**, holding a record-breaking **5 FIFA Club World Cup titles**. They demonstrated their absolute dominance by winning the tournament in **2014, 2016, 2017, 2018, and 2022**, often defeating the champions of South America and Asia. This impressive tally is part of a larger collection of eight world titles when including the predecessor Intercontinental Cup. No other club in history has matched this level of consistency on the world stage, firmly cementing the club's legacy as the greatest in the sport." },
    "La Liga": { name: "La Liga", img: "trophies/36 La Liga titles.jpg", desc: "Real Madrid holds the absolute record for the most domestic titles in Spanish football history, having won La Liga 36 times. They established an era of complete domestic dominance particularly during the 1960s and 1970s, where they captured a staggering 14 league titles in a 20-year span. Their historic championship-winning seasons came in: 1932, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 1967, 1968, 1969, 1972, 1975, 1976, 1978, 1979, 1980, 1986, 1987, 1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007, 2008, 2012, 2017, 2020, 2022, and 2024." },
    "Copa del Rey": { name: "Copa del Rey", img: "trophies/copa del Rey.jpg", desc: "Real Madrid has won Spain's oldest domestic cup competition, the Copa del Rey, 20 times, making them the third most successful club in the history of the tournament. While they are famous for focusing their heaviest firepower on La Liga and the Champions League, their cup history is still filled with legendary moments. Their championship-winning years span over a century of football history:1905, 1906, 1907, 1908, 1917, 1924, 1934, 1936, 1946, 1947, 1962, 1970, 1974, 1975, 1980, 1982, 1989, 1993, 2014, and 2023." },
    "Supercopa de España": { name: "Supercopa de España", img: "trophies/Supercopa de España.jpg", desc: "Real Madrid has won the Supercopa de España 13 times, making them the second most successful club in the history of the competition. They dominated the early years of the tournament, even winning it automatically in 1989 after securing a domestic double, and have remained a constant threat in the modern four-team format. Their winning campaigns came in 1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017, 2020, 2022, and 2024. This impressive domestic tally sits proudly alongside their European records, completing their status as one of football's ultimate powerhouses." },
    "Intercontinental Cup": { name: "Intercontinental Cup", img: "trophies/3 Intercontinental Cup.jpg", desc: "Before the modern FIFA Club World Cup, the Intercontinental Cup was the pinnacle of global club football, pitting the champions of Europe against the champions of South America. Real Madrid won this prestigious trophy 3 times in its original format (1960, 1998, 2002). In late 2024, the title was revitalized as the FIFA Intercontinental Cup, which Real Madrid won immediately in its inaugural edition, bringing their total tally for this specific tournament to 4 titles." },
    "UEFA Europa League": { name: "UEFA Europa League", img: "trophies/Europa League.jpg", desc: "Real Madrid has won the UEFA Europa League 2 times (back when it was known as the UEFA Cup). They achieved this with back-to-back victories in 1985 and 1986, making them one of the few clubs in history to successfully defend this specific European title." },
    "Latin Cup": { name: "Latin Cup", img: "trophies/Latin Cup.jpg", desc: "Real Madrid won the historic Latin Cup 2 times, making them the joint-most successful club in the tournament's history alongside FC Barcelona and AC Milan. This prestigious competition was played in the late 1940s and 1950s, bringing together the domestic league champions of France, Italy, Portugal, and Spain, and it served as an important predecessor to the modern UEFA Champions League." },
    "Ibero-American Cup": { name: "Ibero-American Cup", img: "trophies/Ibero-American Cup.jpg", desc: "The Ibero-American Cup (also known as the Copa Iberoamericana or Copa Iberia) was an official, one-off international club football competition held in May 1994. The tournament was created through an agreement between CONMEBOL and the Royal Spanish Football Federation (RFEF) to celebrate cultural and sporting ties between Spain and South America. It featured a two-legged final between the winners of Spain's Copa del Rey and South America's Copa de Oro Nicolás Leoz." },
    "Copa Eva Duarte": { name: "Copa Eva Duarte", img: "trophies/Copa Eva Duarte.jpg", desc: "The Copa Eva Duarte was an official Spanish football tournament that served as the direct predecessor to the modern Supercopa de España. Organized by the Royal Spanish Football Federation (RFEF), it pitted the reigning champions of La Liga against the winners of the Copa del Generalísimo (now the Copa del Rey). Real Madrid won the trophy 1 time, capturing it during the 1947 edition." },
    "Campeonato Regional Centro": {name: "Campeonato Regional Centro", img: "trophies/Campeonato Regional Centro.jpg", desc: "The Campeonato Regional Centro (Central Regional Championship) was an official, historic regional football tournament in Spain that ran from 1903 to 1940. Before a unified national league (La Liga) was established in 1929, this regional league was the most important competition for clubs in the central region of Spain, serving as the official qualification tournament for the Copa del Rey. Real Madrid completely dominated this competition, winning a record-shattering 23 titles (including variants like the Campeonato Mancomunado) before the regional leagues were permanently dissolved during the Franco era."}
};

function showTrophy(type) {
    const data = trophyDetails[type];
    if(data) {
        document.getElementById("trophyModalImage").src = data.img;
        document.getElementById("trophyModalName").textContent = data.name;
        document.getElementById("trophyModalDescription").textContent = data.desc;
        document.getElementById("trophyModal").style.display = "flex";
    }
}

function closeTrophy() {
    document.getElementById("trophyModal").style.display = "none";
}
function renderManagers(managersList) {
    const container = document.getElementById("managersContainer");
    if (!container) return;
    container.innerHTML = ""; 
    managersList.forEach(manager => {
        const card = document.createElement("div");
        card.className = "manager-card"; 
        card.innerHTML = `
            <img src="${manager.image}" alt="${manager.name}" onerror="this.onerror=null; this.src='Real Madrid Logo.png';">
            <h3>${manager.name}</h3>
            <p>${manager.duration}</p>
        `;       
        card.onclick = () => showManagerModal(manager.name);
        container.appendChild(card);
    });
}
function showManagerModal(name) {
    const m = managers.find(manager => manager.name === name);
    if (m) {
        const modalImage = document.getElementById("modalImage");
        modalImage.onerror = function() {
            this.onerror = null;
            this.src = "Real Madrid Logo.png";
        };
        modalImage.src = m.image;
        document.getElementById("modalName").textContent = m.name;
        document.getElementById("modalPosition").textContent = "Role: Manager / Head Coach";
        document.getElementById("modalCountry").textContent = "Nationality: " + m.country;
        document.getElementById("modalDuration").textContent = "Tenure Era: " + m.duration;
        document.getElementById("modalTrophies").textContent = "Honors Won: " + m.trophies;
        document.getElementById("playerModal").style.display = "flex";
    }
}

function filterManagers() {
    const mSearchInput = document.getElementById("managerSearchInput");
    const mCountryFilter = document.getElementById("managerCountryFilter");
    const mSortFilter = document.getElementById("managerSortFilter");

    const searchValue = mSearchInput ? mSearchInput.value.toLowerCase() : "";
    const selectedCountry = mCountryFilter ? mCountryFilter.value : "All";
    const selectedSort = mSortFilter ? mSortFilter.value : "Default";

    let filtered = managers.filter(m => {
        const matchesSearch = m.name.toLowerCase().includes(searchValue);
        const matchesCountry = selectedCountry === "All" || m.country === selectedCountry;
        return matchesSearch && matchesCountry;
    });

    if (selectedSort === "Latest") {
        filtered = [...filtered].reverse();
    }
    
    renderList(filtered, 'managersContainer', 'manager');
}

function setupCustomDropdown(dropdownId, selectedId, optionsId, hiddenInputId, filterCallback) {
    const container = document.getElementById(dropdownId);
    if (!container) return;
    
    const dropdownSelected = document.getElementById(selectedId) || container.querySelector('#' + selectedId);
    const dropdownOptions = document.getElementById(optionsId) || container.querySelector('#' + optionsId);
    const hiddenInput = document.getElementById(hiddenInputId);
    
    if (!dropdownSelected || !dropdownOptions) return;
    
    const dropdownItems = container.querySelectorAll('.dropdown-item');
    
    dropdownSelected.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownOptions.classList.toggle('show');
    });
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const value = item.getAttribute('data-value');
            const content = item.innerHTML;
            dropdownSelected.innerHTML = content;
            if (hiddenInput) hiddenInput.value = value;
            
            dropdownItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            dropdownOptions.classList.remove('show');
            if (typeof filterCallback === 'function') filterCallback();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof players !== 'undefined' && document.getElementById('playersContainer')) {
        renderPlayers(players);
    }
    if (typeof managers !== 'undefined' && document.getElementById('managersContainer')) {
        renderManagers(managers);
    }
    if (typeof createDots === 'function') {
        createDots();
    }

    setupCustomDropdown('customCountryDropdown', 'dropdownSelected', 'dropdownOptions', 'countryFilter', filterPlayers);
    setupCustomDropdown('customManagerCountryDropdown', 'managerDropdownSelected', 'managerDropdownOptions', 'managerCountryFilter', filterManagers);
});

window.addEventListener('click', () => {
    const optionsList = document.querySelectorAll('.dropdown-options');
    optionsList.forEach(opt => opt.classList.remove('show'));
});

if (document.getElementById("searchInput")) document.getElementById("searchInput").onkeyup = filterPlayers;
if (document.getElementById("positionFilter")) document.getElementById("positionFilter").onchange = filterPlayers;
if (document.getElementById("sortFilter")) document.getElementById("sortFilter").onchange = filterPlayers;

const filters = ["positionFilter", "sortFilter", "managerSortFilter"];
filters.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.onchange = () => {
            if (id.includes('manager')) {
                if (typeof filterManagers === 'function') filterManagers();
            } else {
                if (typeof filterPlayers === 'function') filterPlayers();
            }
        };
    }
});
