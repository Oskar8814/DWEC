-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2025 a las 19:18:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `precipitaciones`
--
CREATE DATABASE IF NOT EXISTS `precipitaciones` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `precipitaciones`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lluvias`
--

CREATE TABLE `lluvias` (
  `id` int(11) NOT NULL,
  `año` int(11) NOT NULL,
  `mes` varchar(15) NOT NULL,
  `precipitacion_mm` decimal(6,2) NOT NULL,
  `ubicacion_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `lluvias`
--

INSERT INTO `lluvias` (`id`, `año`, `mes`, `precipitacion_mm`, `ubicacion_id`) VALUES
(85, 2021, 'Enero', 80.20, 1),
(86, 2021, 'Febrero', 92.50, 1),
(87, 2021, 'Marzo', 75.00, 1),
(88, 2021, 'Abril', 60.30, 1),
(89, 2021, 'Mayo', 50.80, 1),
(90, 2021, 'Junio', 30.20, 1),
(91, 2021, 'Julio', 20.50, 1),
(92, 2021, 'Agosto', 25.00, 1),
(93, 2021, 'Septiembre', 40.30, 1),
(94, 2021, 'Octubre', 55.70, 1),
(95, 2021, 'Noviembre', 70.10, 1),
(96, 2021, 'Diciembre', 85.40, 1),
(97, 2021, 'Enero', 120.30, 2),
(98, 2021, 'Febrero', 140.20, 2),
(99, 2021, 'Marzo', 130.40, 2),
(100, 2021, 'Abril', 90.10, 2),
(101, 2021, 'Mayo', 65.70, 2),
(102, 2021, 'Junio', 45.50, 2),
(103, 2021, 'Julio', 40.80, 2),
(104, 2021, 'Agosto', 50.60, 2),
(105, 2021, 'Septiembre', 80.20, 2),
(106, 2021, 'Octubre', 110.30, 2),
(107, 2021, 'Noviembre', 130.50, 2),
(108, 2021, 'Diciembre', 115.80, 2),
(109, 2021, 'Enero', 35.00, 3),
(110, 2021, 'Febrero', 40.50, 3),
(111, 2021, 'Marzo', 50.00, 3),
(112, 2021, 'Abril', 60.00, 3),
(113, 2021, 'Mayo', 85.20, 3),
(114, 2021, 'Junio', 120.10, 3),
(115, 2021, 'Julio', 150.00, 3),
(116, 2021, 'Agosto', 140.20, 3),
(117, 2021, 'Septiembre', 160.30, 3),
(118, 2021, 'Octubre', 100.00, 3),
(119, 2021, 'Noviembre', 75.10, 3),
(120, 2021, 'Diciembre', 50.80, 3),
(121, 2022, 'Enero', 90.10, 1),
(122, 2022, 'Febrero', 110.30, 1),
(123, 2022, 'Marzo', 88.50, 1),
(124, 2022, 'Abril', 65.00, 1),
(125, 2022, 'Mayo', 55.20, 1),
(126, 2022, 'Junio', 35.40, 1),
(127, 2022, 'Julio', 22.30, 1),
(128, 2022, 'Agosto', 28.10, 1),
(129, 2022, 'Septiembre', 42.60, 1),
(130, 2022, 'Octubre', 60.50, 1),
(131, 2022, 'Noviembre', 75.30, 1),
(132, 2022, 'Diciembre', 90.70, 1),
(133, 2022, 'Enero', 135.00, 2),
(134, 2022, 'Febrero', 155.80, 2),
(135, 2022, 'Marzo', 145.60, 2),
(136, 2022, 'Abril', 98.20, 2),
(137, 2022, 'Mayo', 75.40, 2),
(138, 2022, 'Junio', 55.30, 2),
(139, 2022, 'Julio', 45.80, 2),
(140, 2022, 'Agosto', 65.00, 2),
(141, 2022, 'Septiembre', 100.20, 2),
(142, 2022, 'Octubre', 130.30, 2),
(143, 2022, 'Noviembre', 140.20, 2),
(144, 2022, 'Diciembre', 130.50, 2),
(145, 2022, 'Enero', 30.20, 3),
(146, 2022, 'Febrero', 35.00, 3),
(147, 2022, 'Marzo', 50.30, 3),
(148, 2022, 'Abril', 65.40, 3),
(149, 2022, 'Mayo', 90.10, 3),
(150, 2022, 'Junio', 110.50, 3),
(151, 2022, 'Julio', 140.00, 3),
(152, 2022, 'Agosto', 130.00, 3),
(153, 2022, 'Septiembre', 150.20, 3),
(154, 2022, 'Octubre', 85.30, 3),
(155, 2022, 'Noviembre', 60.40, 3),
(156, 2022, 'Diciembre', 45.10, 3),
(157, 2023, 'Enero', 95.00, 1),
(158, 2023, 'Febrero', 105.80, 1),
(159, 2023, 'Marzo', 93.40, 1),
(160, 2023, 'Abril', 70.20, 1),
(161, 2023, 'Mayo', 60.30, 1),
(162, 2023, 'Junio', 40.60, 1),
(163, 2023, 'Julio', 25.10, 1),
(164, 2023, 'Agosto', 30.00, 1),
(165, 2023, 'Septiembre', 48.00, 1),
(166, 2023, 'Octubre', 65.90, 1),
(167, 2023, 'Noviembre', 80.50, 1),
(168, 2023, 'Diciembre', 95.80, 1),
(169, 2023, 'Enero', 120.20, 2),
(170, 2023, 'Febrero', 135.60, 2),
(171, 2023, 'Marzo', 125.50, 2),
(172, 2023, 'Abril', 100.70, 2),
(173, 2023, 'Mayo', 80.00, 2),
(174, 2023, 'Junio', 55.30, 2),
(175, 2023, 'Julio', 45.80, 2),
(176, 2023, 'Agosto', 58.90, 2),
(177, 2023, 'Septiembre', 90.10, 2),
(178, 2023, 'Octubre', 120.80, 2),
(179, 2023, 'Noviembre', 130.00, 2),
(180, 2023, 'Diciembre', 125.30, 2),
(181, 2023, 'Enero', 32.10, 3),
(182, 2023, 'Febrero', 38.70, 3),
(183, 2023, 'Marzo', 52.10, 3),
(184, 2023, 'Abril', 68.30, 3),
(185, 2023, 'Mayo', 92.50, 3),
(186, 2023, 'Junio', 118.00, 3),
(187, 2023, 'Julio', 145.40, 3),
(188, 2023, 'Agosto', 135.60, 3),
(189, 2023, 'Septiembre', 155.40, 3),
(190, 2023, 'Octubre', 98.50, 3),
(191, 2023, 'Noviembre', 70.80, 3),
(192, 2023, 'Diciembre', 50.20, 3),
(193, 2024, 'Enero', 85.20, 1),
(194, 2024, 'Febrero', 95.70, 1),
(195, 2024, 'Marzo', 90.00, 1),
(196, 2024, 'Abril', 68.50, 1),
(197, 2024, 'Mayo', 58.70, 1),
(198, 2024, 'Junio', 36.40, 1),
(199, 2024, 'Julio', 26.30, 1),
(200, 2024, 'Agosto', 29.40, 1),
(201, 2024, 'Septiembre', 43.20, 1),
(202, 2024, 'Octubre', 59.60, 1),
(203, 2024, 'Noviembre', 72.30, 1),
(204, 2024, 'Diciembre', 86.50, 1),
(205, 2024, 'Enero', 128.50, 2),
(206, 2024, 'Febrero', 142.30, 2),
(207, 2024, 'Marzo', 135.80, 2),
(208, 2024, 'Abril', 105.90, 2),
(209, 2024, 'Mayo', 82.20, 2),
(210, 2024, 'Junio', 57.80, 2),
(211, 2024, 'Julio', 48.60, 2),
(212, 2024, 'Agosto', 62.10, 2),
(213, 2024, 'Septiembre', 94.00, 2),
(214, 2024, 'Octubre', 124.50, 2),
(215, 2024, 'Noviembre', 138.10, 2),
(216, 2024, 'Diciembre', 132.70, 2),
(217, 2024, 'Enero', 34.80, 3),
(218, 2024, 'Febrero', 40.30, 3),
(219, 2024, 'Marzo', 53.70, 3),
(220, 2024, 'Abril', 70.20, 3),
(221, 2024, 'Mayo', 94.60, 3),
(222, 2024, 'Junio', 121.30, 3),
(223, 2024, 'Julio', 148.00, 3),
(224, 2024, 'Agosto', 137.20, 3),
(225, 2024, 'Septiembre', 158.60, 3),
(226, 2024, 'Octubre', 101.70, 3),
(227, 2024, 'Noviembre', 73.50, 3),
(228, 2024, 'Diciembre', 52.30, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicaciones`
--

CREATE TABLE `ubicaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `latitud` decimal(8,4) DEFAULT NULL,
  `longitud` decimal(8,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ubicaciones`
--

INSERT INTO `ubicaciones` (`id`, `nombre`, `latitud`, `longitud`) VALUES
(1, 'Madrid', 40.4168, -3.7038),
(2, 'Buenos Aires', -34.6037, -58.3816),
(3, 'Ciudad de México', 19.4326, -99.1332);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lluvias`
--
ALTER TABLE `lluvias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lluvias`
--
ALTER TABLE `lluvias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=229;

--
-- AUTO_INCREMENT de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
