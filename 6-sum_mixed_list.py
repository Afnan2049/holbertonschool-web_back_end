#!/usr/bin/env python3
"""
This module provides a function to sum a list of mixed integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Takes a mixed list of integers and floats and returns their sum as a float.

    Args:
        mxd_lst (List[Union[int, float]]): A list containing ints and floats.

    Returns:
        float: The sum of the numbers in mxd_lst.
    """
    return float(sum(mxd_lst))
