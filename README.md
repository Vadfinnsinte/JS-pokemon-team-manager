Uppgift, översiktligt
Din uppgift är att göra en webbapp där man kan sätta samman ett lag av Pokémons. Datan ska hämtas från Pokéapi: https://pokeapi.co/ 
Appen ska publiceras online med GitHub Pages.

Syftet med appen är att kunna bygga ett lag med Pokémons. Man väljer nya lagmedlemmar från en sökbar lista med alla Pokémons. Datan hämtar appen från Pokéapi.

Ett lag består av tre ordinarie medlemmar, och obegränsat antal reserver. Om laget har för få medlemmar ska appen påminna användaren.

Appen ska visa listan och lagmedlemmarna i två separata vyer. En vy ser ut som att det är en egen sida. Men i själva verket har appen bara en HTML-sida och du använder JavaScript för att byta vilka element som ska visas.
Tips
Börja med att göra en designskiss - mobile first! 30 sekunder med papper och penna, sedan 30 minuter till 3 timmar i Figma. Hämta gärna inspiration från officiella Pokémon-resurser när du funderar över design och färgval.
Titta på datan som du kan få från API:et. Läs igenom uppgiften, så du vet vad du behöver.
Du måste läsa dokumentationen för API:et - det ingår i uppgiften. Ibland svarar API:et direkt med den datan du vill ha. Ibland svarar den i stället med en URL, där datan finns. Då måste du skicka ett nytt request till den URL:en för att få data.
Se upp! Om du skickar GET request till API:et varje gång appen laddas, kan det bli väldigt många request. Särskilt om du har aktiverat "auto save" i VS Code. Om API:et tycker att du gjort för många request, så kan du bli blockad alltifrån 1 till 24 timmar. (För att undvika det kan du importera testdata från pokemonSample.js och använda den medan du testar.)
Det finns bilder på de flesta Pokémons i egenskapen "sprites.front_default".
Försök att separera funktioner som hämtar data, eller uppdaterar DOM (skapar nya eller använder befintliga element) med hjälp av data. Lägg dem i olika filer och använd export/import.

Krav
Så här ska du jobba:
[G] Appen ska demonstreras för läraren och lämnas in korrekt på LearnPoint.
[G] Appen ska publiceras online med GitHub Pages. Du ska använda git under hela utvecklingen. Du ska använda minst två brancher: main och dev.
[G] Det är viktigt för kunden att du gör en professionell Single Page App. Funktionerna alert och prompt får inte användas. Appen får inte heller laddas om, vare sig med location.reload() eller att användaren klickar på en länk. När du använder länkar behöver du stoppa länk-klick med event.preventDefault().
[G] Under utvecklingen ska du använda code review. Dvs granska någon annans kod, och få din kod granskad. (Behöver inte vara samma person.) Du ska dessutom använda minst två testpersoner. Detta ska du skriva om i projektrapporten.
Funktionella krav:
[G] Appen ska vara responsiv. Använd mobile first, dvs. börja med att designa gränssnittet för en smal skärm, och lägg sedan till stöd för större. Appen ska även vara lättanvänd och snygg. Testa den innan du lämnar in!
[G] Appen ska kunna växla mellan två separata vyer: en för att hitta och lägga till lagmedlemmar; en annan för att se laguppställning.
[G] Både bilder och namn på Pokémons ska visas.
[G] Söka efter Pokémon genom att skriva in en del av namnet i ett textfält.
[G] Möjlighet att lägga till Pokémons till laget. Om laget är fullt läggs de till som reserver i stället.
Exempel på sökning: "Char" hittar "Charmander", "Charmeleon" och "Charizard".
[G] När man lägger till en Pokémon, ska man kunna välja ett smeknamn åt den. Till exempel skulle man kunna lägga till två Pikachu och ge dem namnen Pelle och Perez.
[G] Laguppställningen ska tala om ifall laget är komplett eller inte. Alla lag har tre ordinarie medlemmar och obegränsat antal reserver. Ett komplett lag har tre medlemmar.
[G] Kunna kicka en Pokémon, så att den försvinner från laguppställningen.
[VG] Kunna kicka en Pokémon från laget men behålla den som reserv. Det innebär att första reserven kommer befordras till laget. (Observera att man fortfarande ska kunna kicka helt också.)
[VG] Smart sökning: hittar Pokémon oavsett var i namnet strängen förekommer, samt oavsett om det är stora eller små bokstäver. Exempel: "MaN" hittar "Charmander", "Mankey" och "Omanyte".
[VG] Laguppställningen ska visa namnet på alla abilities varje Pokémon har.
[VG] Möjlighet att ändra ordningen på Pokémons i laget och bland reserverna. (När två lag möter varandra, spelar det roll vilken som är först.)
