#!/usr/bin/env python3
"""
This module provides a function that returns a multiplier function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates a function that multiplies a float by the given multiplier.

    Args:
        multiplier (float): The multiplier to be used in the returned function.

    Returns:
        Callable[[float], float]: A function that takes a float and returns
        the product of that float and the multiplier.
    """
    def multiplier_function(n: float) -> float:
        """ Multiplies n by the multiplier from the outer scope. """
        return n * multiplier

    return multiplier_function
