#!/usr/bin/env python3
"""
This module provides a type-annotated function to calculate the floor.
"""
import math


def floor(n: float) -> int:
    """
    Takes a float n and returns the floor of the float as an int.

    Args:
        n (float): The number to floor.

    Returns:
        int: The largest integer less than or equal to n.
    """
    return math.floor(n)
