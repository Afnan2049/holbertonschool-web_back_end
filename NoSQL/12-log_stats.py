#!/usr/bin/env python3
"""
Module for providing statistics about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def log_stats():
    """
    Provides some stats about Nginx logs stored in MongoDB
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    # Access the collection directly: database 'logs', collection 'nginx'
    nginx_collection = client.logs.nginx

    # 1. Total number of documents
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # 2. Methods breakdown
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # 3. Status check: method=GET, path=/status
    status_check_count = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check_count} status check")


if __name__ == "__main__":
    log_stats()
