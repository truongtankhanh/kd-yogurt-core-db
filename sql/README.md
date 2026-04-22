# SQL Scripts

Schema changes are managed as **plain SQL scripts** in this folder.
No ORM migration runner is used — scripts are applied manually (or via CI/CD) using the MySQL CLI or a DB admin tool.

---

## Folder structure

```
sql/
├── README.md                   ← this file
├── V001__initial_schema.sql    ← creates all tables and views from scratch
└── V002__add_note_to_orders.sql
```

---

## Naming convention

Every file **must** follow this pattern exactly:

```
V<version>__<description>.sql
```

| Part            | Rule                                                                        |
| --------------- | --------------------------------------------------------------------------- |
| `V`             | Literal uppercase `V`                                                       |
| `<version>`     | Zero-padded integer, **3 digits minimum** (e.g. `001`, `002`, `010`, `100`) |
| `__`            | **Double** underscore separator                                             |
| `<description>` | Snake_case, lowercase, words separated by single underscores                |
| `.sql`          | Lowercase extension                                                         |

### Good examples

```
V001__initial_schema.sql
V002__add_note_to_orders.sql
V003__add_index_products_name.sql
V010__create_tags_table.sql
V011__add_tag_id_to_products.sql
```

### Bad examples — do NOT use

```
001_initial.sql           ← missing V prefix
V1__init.sql              ← version not zero-padded to 3 digits
V002_add_note.sql         ← single underscore separator
V002__AddNoteToOrders.sql ← description is not snake_case
v002__add_note.sql        ← lowercase v
```

---

## How to apply a script

### Development

```bash
mysql -h 127.0.0.1 -u root -p yogurt_db < sql/V001__initial_schema.sql
```

### Staging / Production (recommended — via CI/CD)

```bash
mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USERNAME" -p"$DB_PASSWORD" "$DB_NAME" \
  < sql/V<version>__<description>.sql
```

---

## Rules

1. **Never edit a script that has already been applied** to any environment. Add a new script instead.
2. **Version numbers must be unique and sequential.** Never reuse or skip a number.
3. **Each script must be idempotent where possible.** Use `CREATE TABLE IF NOT EXISTS`, `CREATE OR REPLACE VIEW`, and `IF NOT EXISTS` on indexes.
4. **One logical change per file.** Do not bundle unrelated changes.
5. **Always include a corresponding rollback comment** at the bottom of the file describing how to undo the change manually.
6. **Test locally before applying to staging or production.**
