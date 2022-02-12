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
);

CREATE TABLE `tb_servicos` (
  `id_servico` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int DEFAULT NULL,
  `nm_rua` varchar(80) NOT NULL,
  `nr_casa` varchar(45) NOT NULL,
  `nm_bairro` varchar(80) NOT NULL,
  `tipo_servico` enum('Instalação - Split','Instalação - Ar de janela','Manutenção - Carga de gás','Manutenção - Higienização','Manutenção - Aparelho defeituoso','Manutenção - Vazamento de água','Manutenção - Outro') DEFAULT NULL,
  `dt_servico` datetime DEFAULT NULL,
  `vl_pago` int DEFAULT NULL,
  `vl_desconto` int DEFAULT NULL,
  `observacao` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_servico`),
  KEY `fk_id_cliente` (`id_cliente`),
  CONSTRAINT `fk_id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `tb_cliente` (`id_cliente`)
);
SET lc_time_names = 'pt_BR';
SELECT s.id_servico,
    c.nm_cliente,   
    s.nm_rua,
    s.nr_casa,
    s.nm_bairro,
    s.tipo_servico,
	DATE_FORMAT(s.dt_servico, "%d/%m/%y às %H:%i") as dt_servico,
    s.vl_pago,
    s.vl_desconto,
    s.observacao
FROM masterfrio.tb_servicos as s, masterfrio.tb_cliente as c
WHERE c.id_cliente = s.id_cliente;

select * from tb_cliente;
select * from tb_servicos;

INSERT INTO `masterfrio`.`tb_servicos`
(
`id_cliente`,
`nm_rua`,
`nr_casa`,
`nm_bairro`,
`tipo_servico`,
`dt_servico`,
`vl_pago`,
`observacao`)
VALUES
(1,"Rua Canguru","400","Jardim Sofia","Instalação - Split","21-12-9 14:30:00",350,'abalsdalkd');
truncate tb_servicos;
UPDATE tb_servicos as s, tb_cliente as c SET c.nm_cliente = "Jorge", s.id_cliente = 1, s.nm_rua = 1, s.nr_casa = 1, s.nm_bairro = 1, s.tipo_servico = 'Instalação - Split', s.dt_servico = '21-12-9 14:30:00', s.vl_pago = 1, s.vl_desconto = 1, s.observacao = 1  WHERE s.id_servico = 1 ;


