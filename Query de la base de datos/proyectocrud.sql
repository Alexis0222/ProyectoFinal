-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-12-2021 a las 04:51:25
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectocrud`
--
CREATE DATABASE IF NOT EXISTS `proyectocrud` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `proyectocrud`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos_personas`
--

CREATE TABLE `fotos_personas` (
  `id_persona` bigint(20) UNSIGNED NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `fotos_personas`
--

INSERT INTO `fotos_personas` (`id_persona`, `foto`) VALUES
(54, 'FB_IMG_1637032139375.png'),
(55, 'FB_IMG_1636600300665.jpg'),
(56, 'FB_IMG_1637878508503.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id_personas` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `edad` varchar(3) NOT NULL,
  `ubicacion` varchar(45) NOT NULL,
  `acerca_de_mi` varchar(45) NOT NULL,
  `perfil` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id_personas`, `nombre`, `edad`, `ubicacion`, `acerca_de_mi`, `perfil`) VALUES
(54, 'lopez', '21', 'mexicali', 'estudio APP WEB', 'SISTEMAS COMPUTACIONALES'),
(55, 'juan', '21', 'guadalajara', 'otaku profesional', 'diseño grafico'),
(56, 'miguel', '22', 'mexicali', 'otaku', 'otaku');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntaje_personas`
--

CREATE TABLE `puntaje_personas` (
  `id_persona` bigint(20) UNSIGNED NOT NULL,
  `likes` int(11) DEFAULT NULL,
  `dislikes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `puntaje_personas`
--

INSERT INTO `puntaje_personas` (`id_persona`, `likes`, `dislikes`) VALUES
(54, 3, 3),
(55, 10, 0),
(56, 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `fotos_personas`
--
ALTER TABLE `fotos_personas`
  ADD PRIMARY KEY (`id_persona`),
  ADD UNIQUE KEY `id_persona_UNIQUE` (`id_persona`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id_personas`,`edad`),
  ADD UNIQUE KEY `id_UNIQUE` (`id_personas`);

--
-- Indices de la tabla `puntaje_personas`
--
ALTER TABLE `puntaje_personas`
  ADD PRIMARY KEY (`id_persona`),
  ADD UNIQUE KEY `id_persona_UNIQUE` (`id_persona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id_personas` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fotos_personas`
--
ALTER TABLE `fotos_personas`
  ADD CONSTRAINT `fkpersona` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_personas`);

--
-- Filtros para la tabla `puntaje_personas`
--
ALTER TABLE `puntaje_personas`
  ADD CONSTRAINT `fk` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_personas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
