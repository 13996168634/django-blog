#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/11/13 18:23
# @Author  : Alvin
# @File    : urls.py
from django.conf.urls import url

from . import views

app_name = 'comments'
urlpatterns = [
    url(r'^comment/post/(?P<post_pk>[0-9]+)/$', views.post_comment, name='post_comment'),
]