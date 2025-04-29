#!/usr/bin/env python3
"""
Module that lists all documents in a collection
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection
    Args:
        mongo_collection: pymongo collection object
    Returns:
        List of all documents or empty list if no documents
    """
    if mongo_collection is None:
        return []

    documents = list(mongo_collection.find())

    return documents
