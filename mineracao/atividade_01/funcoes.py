# Funções gerais
def saudacao():
    print("Olá, mundo!")
saudacao()

def saudacao_personalizada(nome):
    print(f"Olá, {nome}!")
saudacao_personalizada("Diogo")

def soma(a, b):
    resultado = a + b
    return resultado
total = soma(3,5)
print(total)

# Funções específicas
def somar(x,y):
    return x + y

def subtrair(x,y):
    return x - y

def multiplicar(x,y):
    return x * y

def dividir(x,y):
    if y == 0: 
        return "Erro: Não é possível dividir por zero!"
    else:
        return x / y

# Exemplo prático
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

print("Escolha uma operação:")
print("1. Somar")
print("2. Subtrair")
print("3. Multiplicar")
print("4. Dividir")

escolha = input("Digite uma escolha: (1/2/3/4) ")

if escolha == '1':
    print(f"{num1} + {num2} = {somar(num1, num2)}")
elif escolha == '2':
    print(f"{num1} - {num2} = {subtrair(num1, num2)}")
elif escolha == '3':
    print(f"{num1} * {num2} = {multiplicar(num1, num2)}")
elif escolha == '4':
    print(f"{num1} / {num2} = {dividir(num1, num2)}")
else:
    print("Escolha inválida")
