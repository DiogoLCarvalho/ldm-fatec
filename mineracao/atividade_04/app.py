import os
from openai import AzureOpenAI

endpoint = os.getenv("ENDPOINT_URL", "https://diogo-m290i6k8-australiaeast.openai.azure.com/")  
deployment = os.getenv("DEPLOYMENT_NAME", "gpt-4-32k")
subscription_key = os.getenv("MINHAAPI", "MINHAAPI")

# Initialize Azure OpenAI client with key-based authentication
client = AzureOpenAI(
    azure_endpoint = endpoint,
    api_key = subscription_key,
    api_version = "2024-05-01-preview",
)

completion = client.chat.completions.create(
    model=deployment,
    messages= [{"role": "user", "content": "Produtos do Microsoft Office"}],
    max_tokens=800,
    temperature=0.7,
    top_p=0.95,
    frequency_penalty=0,
    presence_penalty=0,
    stop=None,
    stream=False
)

print(completion.to_json())