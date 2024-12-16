            function sortearNome() {
                const nameList = document.getElementById('name-list-8').value.trim().split('\n');
                const quantity = parseInt(document.getElementById('quantity-8').value);
                const resultDiv = document.getElementById('result-8');
                const dateTimeDiv = document.getElementById('date-time-8');

                if (nameList.length > 0 && quantity > 0) {
                    const sortedNames = [];
                    const nameListCopy = [...nameList];

                    for (let i = 0; i < Math.min(nameList.length, quantity); i++) {
                        const randomIndex = Math.floor(Math.random() * nameListCopy.length);
                        sortedNames.push(nameListCopy.splice(randomIndex, 1)[0]);
                    }

                    resultDiv.textContent = 'Nomes sorteados: ' + sortedNames.join(', ');

                    const now = new Date();
                    const formattedDateTime = now.toISOString().replace('T', ' ').substring(0, 19);
                    dateTimeDiv.textContent = 'Sorteio realizado em: ' + formattedDateTime;
                } else {
                    resultDiv.textContent = 'Por favor, insira ao menos um nome e uma quantidade válida.';
                    dateTimeDiv.textContent = '';
                }
            }

            document.getElementById('sort-button-8').addEventListener('click', sortearNome);