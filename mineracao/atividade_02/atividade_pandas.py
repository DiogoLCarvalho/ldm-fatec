import pandas as pd
import json
from pathlib import Path

PATH = Path(__file__).parent.parent.parent / "arquivos/tmdb_5000_credits.csv"
films_database = pd.read_csv(PATH)

# Leitura do arquivo - head()
FILMS_HEAD = films_database.head()
print(f"HEAD: ==============\n {FILMS_HEAD} \n")

# Demonstrar os dados das colunas ['title',''cast"]
print("TITLE AND CAST: ==============")
print(films_database[['title', 'cast']] + "\n")

# Demonstrar a disposição de nomes de alguns atores, baseado em seus respectivos filmes;
for index, row in films_database.iterrows():
    titulo = row['title']
    elenco = row['cast']
    lista = json.loads(elenco)
    nome_do_ator = lista[0]['name']

    print(f"{titulo} | {nome_do_ator}")

    # Para não lotar o terminal estou filtrando os títulos :)
    if index == 9:
        break;
    