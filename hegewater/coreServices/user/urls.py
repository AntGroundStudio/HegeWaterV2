from django.urls import path
from . import views

urlpatterns=[
    path('test',views.test),
    # path('signup',views.signUp),
    # path('signin',views.signIn),
    # path('logout',views.logOut),
    # path('read',views.getAllUsers),
    # path('update',views.updateUser),
    # path('delete',views.deleteUser),
]