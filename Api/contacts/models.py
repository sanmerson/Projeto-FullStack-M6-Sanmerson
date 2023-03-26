from django.db import models


class Contacts(models.Model):
    class Meta:
        ordering = ["id"]

    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=120, null=True)
    phone = models.CharField(max_length=20, null=True)
    description = models.CharField(max_length=200, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)

    client = models.ForeignKey(
        'clients.Clients',
        on_delete=models.CASCADE,
        related_name="contacts"
    )
# Create your models here.
