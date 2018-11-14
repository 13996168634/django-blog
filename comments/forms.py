#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/11/13 18:10
# @Author  : Alvin
# @File    : forms.py
from django import forms
from .models import Comment

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['name', 'email', 'url', 'text']