CREATE DATABASE `masterfrio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `tb_cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nm_cliente` varchar(45) NOT NULL,
  `nm_rua` varchar(80) NOT NULL,
  `nr_casa` varchar(20) NOT NULL,
  `nm_bairro` varchar(80) NOT NULL,
  `tl_telefone` varchar(20) NOT NULL,
  `email` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
)

CREATE TABLE `tb_servicos` (
  `id_servico` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `nm_rua` varchar(80) NOT NULL,
  `nr_casa` int NOT NULL,
  `nm_bairro` varchar(80) NOT NULL,
  `tipo_servico` enum('Instalação - Split','Instalação - Ar de janela','Manutenção - Carga de gás','Manutenção - Higienização','Manutenção - Aparelho defeituoso','Manutenção - Vazamento de água','Manutenção - Outro') DEFAULT NULL,
  `dt_servico` date DEFAULT NULL,
  `vl_pago` int DEFAULT NULL,
  `vl_desconto` int DEFAULT NULL,
  `observacao` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_servico`),
  KEY `fk_id_cliente` (`id_cliente`),
  CONSTRAINT `fk_id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `tb_cliente` (`id_cliente`)
)

select * from tb_cliente;