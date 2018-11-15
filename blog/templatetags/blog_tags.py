#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/11/13 11:01
# @Author  : Alvin
# @File    : blog_tags.py
from django import template  #导入template模块
from ..models import Post, Category, Tag

from django.db.models.aggregates import Count

register = template.Library()   #实例化template.Library()类

@register.simple_tag    #将函数装饰为register.simple_tag
def get_recent_posts(num=5):
    return Post.objects.all().order_by('-created_time')[:num]

@register.simple_tag
def archives():
    # month是精度，精确到月
    return Post.objects.dates('created_time', 'month', order='DESC')

@register.simple_tag
def get_categories():
    # return Category.objects.all()
    return Category.objects.annotate(num_posts=Count('post')).filter(num_posts__gt=0)

"""
@register.simple_tag
def get_tags()
    # Count 计算分类下的文章数，其接受的参数为需要计数的模型的名称
    return Tag.objects.annotate(num_posts=Count('post'))
"""