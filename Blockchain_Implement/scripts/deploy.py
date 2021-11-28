from brownie import accounts, compile_source, Wei, config, SimpleStorage, network

def deploy_simple_storage():
    """Deploys the SimpleStorage contract."""
    # account = accounts.add(config["wallets"]["from_key"])
    account = accounts[0]
    # print(account)
    simple_storage = SimpleStorage.deploy({"from":account})
    print(simple_storage)
    store_value = simple_storage.retrieve()
    print(store_value)
    transaction = simple_storage.store(7,{"from":account})
    transaction.wait(1)
    updated_store_value = simple_storage.retrieve()
    print(updated_store_value)

def main():
    print("Deploying the contract...")
    deploy_simple_storage()
    