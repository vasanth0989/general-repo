# wire-ii-pain001-mapper

Maps the Payment Exchange payment object (`SDPPayload`) to an ISO 20022
pain.001.001.11 customer credit transfer initiation, for outbound GPN and
corporate wires submitted to FIS OPF. Phase 1 of the DFS OPF Convergence
program; the XML message is rendered as JSON for the FIS API.

Java 21, Gradle. The V11 classes are generated at build time from
`xsd/pain.001.001.11.xsd`.


## Documents

- `docs/payment-object-inventory.md`: every field of the payment object, with its relevance to wires
- `docs/pain001-v11-field-mapping.md`: field-to-field mapping, code tables, gaps, open questions
- `docs/pain001-v11-element-tree.md`: the V11 schema as a flat element list with cardinalities


