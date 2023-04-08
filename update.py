import pandas as pd
import random
import pickle
import time
import os


def update_dataframe():
    # Create a DataFrame with 3 columns of data
    df = pd.DataFrame({
        'Number1': [random.randint(1, 10) for _ in range(5)],
        'Number2': [random.randint(1, 10) for _ in range(5)],
        'Text': ['foo', 'bar', 'baz', 'qux', 'quux']
    })

    while True:
        # Randomly select a row and column to update
        row_idx = random.randint(0, len(df) - 1)
        col_idx = random.randint(0, 2)

        # Generate a new value based on the column type
        if col_idx < 2:
            new_val = random.randint(1, 10)
        else:
            new_val = random.choice(['foo', 'bar', 'baz', 'qux', 'quux'])

        # Update the DataFrame with the new value
        df.iloc[row_idx, col_idx] = new_val

        # Write the updated DataFrame to a file using pickle
        # dump_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        dump_path = os.path.join(os.path.dirname(
            os.path.abspath(__file__)), "data")

        with open(dump_path, "wb+") as dbfile:
            pickle.dump(df, dbfile)

        # Wait for 1 second before updating again
        print(df)
        time.sleep(1)


update_dataframe()
