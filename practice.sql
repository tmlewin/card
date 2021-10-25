-- SELECT DISTINCT
-- CastFilmID  as FilmID
-- ,CastActorID as ActorId
--  ,CastCharacterName as Name
--  ,ActorGender as Gender
 
--  from 
 
 
--  Movies.dbo.tblCast as cast
--  INNER JOIN  Movies.dbo.tblActor as actor ON actor.ActorID = cast.CastActorID


-- -- order by CastCharacterName ASC 

-- SELECT 
--       FilmID
--       ,FilmName as Name
--       ,FilmReleaseDate as ReleaseDate
--       ,FilmDirectorID as DirectorID
--       ,FilmStudioID as StudioID
--       ,FilmSynopsis
--       ,FilmCountryID
--       ,FilmLanguageID
--       ,FilmRunTimeMinutes as RunTimeMinutes
--       ,FilmGenreID as GenreID
--       ,ISNULL(cast(FilmCertificateID as int), ' ') AS CertificateID
--       ,FilmBudgetDollars
--       ,FilmBoxOfficeDollars
--       ,FilmOscarNominations
--       ,FilmOscarWins as Wins
--   FROM Movies.dbo.tblFilm
--   WHERE YEAR(FilmReleaseDate) IN (2000,2005,2004,2006) AND MONTH(FilmReleaseDate) IN (2,3,5,6,7)

--   ORDER BY FilmReleaseDate

-- CREATE proc sp_FilmList 

-- AS
-- BEGIN

-- SELECT
-- FilmID
-- ,FilmName 
-- ,FilmBudgetDollars
-- ,FilmBoxOfficeDollars
-- ,CASE
-- WHEN (FilmRunTimeMinutes) <= 90  THEN 'SHORT' 
-- WHEN (FilmRunTimeMinutes) <= 120  THEN 'MEDIUM' 
-- WHEN (FilmRunTimeMinutes) <= 160  THEN 'LONG' 
-- ELSE 'EPIC' 

-- END AS ComputedTime
-- -- ,FilmRunTimeMinutes/60 as RunTimeHours
-- -- ,FilmRunTimeMinutes%60 as RunTimeMinutes
-- ,concat('$',ISNULL((FilmBoxOfficeDollars - FilmBudgetDollars),'') ) AS FilmProfitLoss


--  FROM Movies.dbo.tblFilm





--  ORDER BY FilmProfitLoss DESC
--  END



-- EXECUTE sp_FilmList


-- SELECT
-- FilmID
-- ,CASE 

-- WHEN FilmName LIKE  '%Rush Hour%' THEN 'awful'
-- ELSE 'probably not bad'
-- END AS Name


--  FROM Movies.dbo.tblFilm


-- select * 
-- from 
-- movies.dbo.tblActor as a
-- inner join  movies.dbo.tblDirector as d  on  a.ActorName = d.DirectorName
-- where  a.ActorName = d.DirectorName

-- create proc sp_FilmDuration(@Minlength as int)

-- AS

-- BEGIN
-- SELECT 
--       FilmID
--       ,FilmName as Name
--       ,FilmReleaseDate as ReleaseDate
--       ,FilmDirectorID as DirectorID
--       ,FilmStudioID as StudioID
--       ,FilmSynopsis
--       ,FilmCountryID
--       ,FilmLanguageID
--       ,FilmRunTimeMinutes as RunTimeMinutes

-- FROM Movies.dbo.tblFilm
-- WHERE 

-- FilmRunTimeMinutes > @Minlength
-- END

-- execute sp_FilmDuration 90 