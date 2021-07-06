# Generated by Django 3.1 on 2020-09-03 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0007_trips'),
    ]

    operations = [
        migrations.AddField(
            model_name='trips',
            name='date',
            field=models.DateField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='trips',
            name='trucker',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='trips',
            name='trucker_phone',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]