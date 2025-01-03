with open ('country_flag_colors.csv', 'r') as ff:
    color_dict = {}
    lines = ff.readlines()
    for line in lines:
        line = line.strip()
        country, colors = line.split(',')
        country = country.lower()
        colors = colors.lower()
        color_dict[country] = colors
ff.close()    

import pandas as pd
df = pd.read_csv('countries.csv')
df['flag_colors'] = df['name'].str.lower().map(color_dict)
df.to_csv('countires.csv', index=False)
