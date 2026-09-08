USE [LocalFlex]
GO
SELECT * FROM [LocalFlex].[dbo].[RV_OBJETIVO]
BEGIN TRANSACTION

DELETE FROM [dbo].[RV_OBJETIVO]
      WHERE RV_OBJ_ID IN ('11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31')
GO

ROLLBACK
COMMIT



