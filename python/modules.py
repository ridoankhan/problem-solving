# built-in modules
# import custom module
from validator import validate_email
import datetime
from datetime import date
from time import time
from camelcase import CamelCase

# pip module
c = CamelCase()
txt = "hello world"
print(c.hump(txt))

# today = date.today()
# timestamp = time.time()

# print(timestamp)

email = 'test@test.com'
if validate_email(email):
    print('Email is valid')
else:
    print('Email is bad')
