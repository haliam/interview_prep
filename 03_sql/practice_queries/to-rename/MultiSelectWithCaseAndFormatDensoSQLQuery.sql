
SELECT [PER_ID] as Id
      ,[PER_NIF] as Nif
      ,[PER_NOMBRE] as Nombre
      ,[PER_APELLIDOS] as Apellidos
	  ,
		CASE  
		WHEN [PER_FECHA_ACEPTACION_RGPD] IS NOT NULL THEN 'Aceptado'
		ELSE 'Pendiente'					
		END AS 'Estado de la firma'
	  ,
	  	CASE  
		WHEN [PER_FECHA_ACEPTACION_RGPD] IS NULL THEN ''
		ELSE FORMAT (PER_FECHA_ACEPTACION_RGPD,'dd/MM/yyyy')
		END AS 'Fecha Aceptación'
	 ,
		CASE  
		WHEN [PER_FECHA_ACEPTACION_RGPD] IS NULL THEN ''
		ELSE FORMAT (PER_FECHA_ACEPTACION_RGPD,'HH:mm')
		END AS 'Hora Aceptación'
		
FROM [dbo].[PERSONA]
WHERE PER_FK_EMPRESA_ID = 13169 
AND PER_USUARIO_REAL = 1
AND ISNULL(PER_USUARIO_ADMINISTRADOR, 0) = 0
AND PER_BAJA_SISTEMA IS NULL

ORDER BY [Estado de la firma]

GO


/*
Fila por empleado
---------------------
Nif 
Nombre
Apellidos
Estado de la firma
	Aceptado
	Pendiente
Fecha Aceptación

Filtrar
---------------------
PER_USUARIO_REAL = 1
PER_USUARIO_ADMINISTRADOR = 0
PER_BAJA_SISTEMA IS NULL
*/