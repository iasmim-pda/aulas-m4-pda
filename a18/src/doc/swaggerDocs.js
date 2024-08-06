/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       required:
 *         - nome
 *         - idade
 *         - raca
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do pet
 *         nome:
 *           type: string
 *           description: Nome do pet
 *         idade:
 *           type: integer
 *           description: Idade do pet
 *         raca:
 *           type: string
 *           description: Raça do pet
 *       example:
 *         id: 1
 *         nome: Rex
 *         idade: 5
 *         raca: Labrador
 */

/**
 * @swagger
 * /pets/all:
 *   get:
 *     summary: Retorna todos os pets
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de todos os pets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Cria um novo pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: Pet criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 */

/**
 * @swagger
 * /pets/{id}:
 *   get:
 *     summary: Retorna um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pet
 *     responses:
 *       200:
 *         description: Pet encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       404:
 *         description: Pet não encontrado
 */

/**
 * @swagger
 * /pets/{id}:
 *   delete:
 *     summary: Deleta um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pet
 *     responses:
 *       204:
 *         description: Pet deletado com sucesso
 *       404:
 *         description: Pet não encontrado
 */

/**
 * @swagger
 * /pets/{id}:
 *   put:
 *     summary: Atualiza um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: Pet atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       404:
 *         description: Pet não encontrado
 */
