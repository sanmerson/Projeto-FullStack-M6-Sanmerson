from django.db import models


class Clients(models.Model):
    class Meta:
        ordering = ["id"]

    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=120)
    phone = models.CharField(max_length=20)
    create_at = models.DateTimeField(auto_now_add=True)
# Create your models here.
