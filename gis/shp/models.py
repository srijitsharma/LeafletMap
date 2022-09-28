from django.db import models
from django.contrib.gis.db import models as gismodels
# Create your models here.


class Nepal(models.Model):
    geom = gismodels.MultiPolygonField(blank=True, null=True)
    ddgn = models.BigIntegerField(blank=True, null=True)
    first_dcod = models.BigIntegerField(blank=True, null=True)
    first_dist = models.CharField(max_length=50, blank=True, null=True)
    first_gn_c = models.FloatField(blank=True, null=True)
    first_stat = models.BigIntegerField(blank=True, null=True)
    shape_leng = models.FloatField(blank=True, null=True)
    shape_area = models.FloatField(blank=True, null=True)
    area = models.FloatField(blank=True, null=True)
    centroid_x = models.FloatField(blank=True, null=True)
    centroid_y = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nepal'

  # incase if list display is not used in admin.py
  # def __str__(self):
   #     return self.first_dist
