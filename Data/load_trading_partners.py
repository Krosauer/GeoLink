import pandas as pd
df = pd.read_csv('countries.csv')
countries = df['name'].values.tolist()


with open('trading_exports.csv', 'r') as fp:
    lines = fp.readlines()
    lines = [line.strip() for line in lines] 
    exports = {}
    for line in lines:
        country, rank, id, export = line.split(',')
        country = country.lower()
        if export not in countries:
            continue
        if country not in exports:
            exports[country] = [export]
        else:
            exports[country].append(export)
fp.close()

with open('trading_imports.csv', 'r') as fp:
    lines = fp.readlines()
    lines = [line.strip() for line in lines] 
    imports = {}
    for line in lines:
        country, rank, id, import_ = line.split(',')
        country = country.lower()
        if country not in imports:
            imports[country] = [import_]
        else:
            imports[country].append(import_)
fp.close()


for country in exports:
    exports[country] = ';'.join(exports[country])
for country in imports:
    imports[country] = ';'.join(imports[country])

df['exports'] = df['name'].str.lower().map(exports)
df['imports'] = df['name'].str.lower().map(imports)
df.to_csv('countries.csv', index=False)
