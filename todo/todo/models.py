from django.conf import settings
from django.db import models
from django.utils import timezone

class Post(models.Model):
    id=models.AutoField(primary_key=True)
    note_title = models.CharField(max_length=200)
    details = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.note_title
# Create your models here.
