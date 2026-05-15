#!/usr/bin/env python3
"""
This module contains a type-annotated function that returns a tuple.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string k and a number v and returns a tuple.

    Args:
        k (str): The string key.
        v (Union[int, float]): The value to be squared.

    Returns:
        Tuple[str, float]: A tuple where the first element is k and the
        second element is the square of v as a float.
    """
    return (k, float(v**2))
